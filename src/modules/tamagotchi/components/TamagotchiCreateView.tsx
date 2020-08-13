import { Box } from "ink"
import * as React from "react"
import { Input } from "../../../framework/cli/elements/Input"
import { MultiSelect } from "../../../framework/cli/elements/MultiSelect"
import { CONTROLS_TEXT } from "../../controls/text"
import { getTamagotchiType } from "../business-logic"
import { TamagotchiCreateContainerProps } from "../containers/TamagotchiCreateContainer"
import { Tamagotchi } from "../models"

type Stage = "SET_NAME" | "SET_GENDER" | "SUBMIT" | "CONFIRM"
export function TamagotchiCreateView({
	createTamagotchiAction
}: TamagotchiCreateContainerProps): JSX.Element {
	const [newTamagotchiState, setTamagotchi] = React.useState<
		Pick<Tamagotchi, "name" | "type"> & { stage: Stage }
	>({ name: "", type: "other", stage: "SET_NAME" })

	const handleSubmit = React.useCallback(
		(stage: Stage, submittedValue: string) => {
			switch (stage) {
				case "SET_NAME":
					setTamagotchi({
						name: submittedValue,
						type: newTamagotchiState.type,
						stage: "SET_GENDER"
					})
					break
				case "SET_GENDER":
					const gender = getTamagotchiType(submittedValue)
					if (gender) {
						setTamagotchi({
							name: newTamagotchiState.name,
							type: gender,
							stage: "CONFIRM"
						})
					}
					break
				case "SUBMIT":
					createTamagotchiAction(newTamagotchiState.name, newTamagotchiState.type)
					break
				default:
					break
			}
		},
		[createTamagotchiAction]
	)

	switch (newTamagotchiState.stage) {
		case "SET_NAME":
			return (
				<Input
					prompt={CONTROLS_TEXT.set_name}
					onSubmit={(value: string) => handleSubmit("SET_NAME", value)}
				/>
			)
		case "SET_GENDER":
			return (
				<Box>
					<MultiSelect
						mode="radio"
						items={[
							{
								label: "Male",
								value: "male"
							},
							{
								label: "Female",
								value: "female"
							},
							{
								label: "Other",
								value: "other"
							}
						]}
						onSubmit={([value]) => {
							handleSubmit("SET_GENDER", value)
						}}
					/>
				</Box>
			)
		case "CONFIRM":
		default:
			return <Box height={0} width={0}></Box>
	}
}
