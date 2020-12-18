import Layout from '@/layout';
const componentsRouter = {
	path: '/components',
	component: Layout,
	redirect: 'noRedirect',
	name: 'ComponentDemo',
	meta: {
		title: 'Components',
		icon: 'component',
	},
	children: [
		{
			path: 'image-cropper-upload',
			component: () => import('@/views/components-demo/image-cropper-upload'),
			name: 'ImageCropperUpload',
			meta: { title: 'Upload' },
		},
	],
};

export default componentsRouter;
