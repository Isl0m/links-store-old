import dynamic from 'next/dynamic'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'

import s from '@/screens/editProfile/Edit.module.scss'
import { EditFieldWithControl } from '@/screens/editProfile/edit.forms.interface'

import Field from '@/ui/field/Field'
import FileInput from '@/ui/fileInput/UploadField'

import { ILink } from '@/shared/types/profile.types'

const DynamicSelect = dynamic(() => import('@/ui/select/SelectMultiInput'), {
	ssr: false,
})

const LinkForm: FC<EditFieldWithControl<ILink>> = ({
	errors,
	register,
	control,
}) => {
	return (
		<div className={s.form}>
			<h4 className={s.title}>Link Edit Fields</h4>
			<div className={s.fields}>
				<Controller
					name="link.avatar"
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<FileInput
							placeholder="Upload avatar"
							folder="avatars"
							file={value}
							onChange={onChange}
							error={error}
						/>
					)}
				/>
				<Controller
					name="link.background"
					control={control}
					rules={{
						required: 'Background image required',
					}}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<FileInput
							placeholder="Upload background"
							folder="bg"
							file={value}
							onChange={onChange}
							error={error}
						/>
					)}
				/>

				<Controller
					name="link.CV"
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<FileInput
							placeholder="Upload CV"
							folder="cv"
							file={value}
							onChange={onChange}
							error={error}
						/>
					)}
				/>

				<Controller
					name="link.portfolio"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							label="Portfolio"
							placeholder="Enter links for portfolio"
							isLoading={Boolean(!field.value)}
						/>
					)}
				/>

				<Controller
					name="link.social"
					control={control}
					rules={{
						required: 'Social links required',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							label="Social Links"
							isLoading={Boolean(!field.value)}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default memo(LinkForm)
