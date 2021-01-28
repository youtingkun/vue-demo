import Layout from '@/layout';
const componentsRouter = {
	path: '/components',
	component: Layout,
	redirect: 'noRedirect',
	name: 'ComponentDemo',
	alwaysShow: true,
	meta: {
		title: 'Components',
		icon: 'dashboard',
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
