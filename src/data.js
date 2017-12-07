export const
	initialState = {
		iphoneApp: {
			banner_image: [
				{url: 'http://is1.mzstatic.com/image/thumb/Features111/v4/a5/da/02/a5da022a-b058-bf4e-dd3d-a9719dd14be4/source/1360x520fa.jpg'},
				{url: 'http://is2.mzstatic.com/image/thumb/Features111/v4/92/6a/b2/926ab2f9-0aab-f9b6-1225-bf7f4e4fb86d/source/1360x520fa.jpg'},
				{url: 'http://a2.mzstatic.com/us/r30/Features122/v4/b8/6a/64/b86a646e-aca5-3fe0-225d-41f8ee1abb86/flowcase_1360_520_2x.jpeg'},
			],
			classic: {
				name: 'Любителям классики',
				data: [
					{id: 15, name: 'Facebook', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0a/08/cc/0a08cc88-6fa7-97e3-7d61-7bb9dadc6f38/Icon-Production-1x_U007emarketing-sRGB-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 13, name: 'Tinder', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0b/02/cc/0b02cce4-e4ca-516b-8f22-96281ea4d513/AppIcon-1x_U007emarketing-85-220-0-4.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 12, name: 'Pandora', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/04/d3/17/04d31785-bd1d-e9a2-8071-e899e37858bc/mzl.piptyhvk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 14, name: 'Snapchat', description: '1', category: 'Игры', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/39/c8/3e/39c83efb-6909-106e-43f9-fc84e3ad2791/mzl.jmjgtzpw.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 9, name: 'Instagram', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/a2/a8/f9/a2a8f9db-a608-bc38-0403-900054c2cdda/Prod-1x_U007emarketing-85-220-0-5.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 10, name: 'Gmail', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/7c/6c/f2/7c6cf27c-6f13-0860-c443-ed923846f1f8/mzl.xwmfxurk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 11, name: 'Netflix', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/37/e4/39/37e439e7-c271-211b-e495-fa38eae72c70/AppIcon-1x_U007emarketing-0-85-220-0-9.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
				]
			},
			new_application: {
				name: 'Новое и интересное',
				data: [
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 9, name: 'Instagram', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/a2/a8/f9/a2a8f9db-a608-bc38-0403-900054c2cdda/Prod-1x_U007emarketing-85-220-0-5.png/53x53bb.png?h=is5.mzstatic.com', amount: 10},
					{id: 10, name: 'Gmail', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/7c/6c/f2/7c6cf27c-6f13-0860-c443-ed923846f1f8/mzl.xwmfxurk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 11, name: 'Netflix', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/37/e4/39/37e439e7-c271-211b-e495-fa38eae72c70/AppIcon-1x_U007emarketing-0-85-220-0-9.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 12, name: 'Pandora', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/04/d3/17/04d31785-bd1d-e9a2-8071-e899e37858bc/mzl.piptyhvk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 13, name: 'Tinder', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0b/02/cc/0b02cce4-e4ca-516b-8f22-96281ea4d513/AppIcon-1x_U007emarketing-85-220-0-4.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 14, name: 'Snapchat', description: '1', category: 'Игры', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/39/c8/3e/39c83efb-6909-106e-43f9-fc84e3ad2791/mzl.jmjgtzpw.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 15, name: 'Facebook', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0a/08/cc/0a08cc88-6fa7-97e3-7d61-7bb9dadc6f38/Icon-Production-1x_U007emarketing-sRGB-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
				]
			},
			interesting: {
				name: 'Вам может понравиться',
				data: [
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
				]
			},
			popular: {
				name: 'Популярные коллекции',
				data: [
					{id: 1, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 2, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 3, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 13, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 4, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 5, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 6, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 12, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 7, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 8, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 9, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 14, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 10, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 11, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
				]
			},
			favorites: {
				name: 'Фавориты прошлых недель',
				data: [
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
				]
			}
		},

		ipadApp: {
			banner_image: [
				{url: 'http://is1.mzstatic.com/image/thumb/Features111/v4/a5/da/02/a5da022a-b058-bf4e-dd3d-a9719dd14be4/source/1360x520fa.jpg'},
				{url: 'http://is2.mzstatic.com/image/thumb/Features111/v4/92/6a/b2/926ab2f9-0aab-f9b6-1225-bf7f4e4fb86d/source/1360x520fa.jpg'},
				{url: 'http://a2.mzstatic.com/us/r30/Features122/v4/b8/6a/64/b86a646e-aca5-3fe0-225d-41f8ee1abb86/flowcase_1360_520_2x.jpeg'},
			],
			classic: {
				name: 'Любителям классики',
				data: [
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 10, name: 'Gmail', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/7c/6c/f2/7c6cf27c-6f13-0860-c443-ed923846f1f8/mzl.xwmfxurk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 9, name: 'Instagram', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/a2/a8/f9/a2a8f9db-a608-bc38-0403-900054c2cdda/Prod-1x_U007emarketing-85-220-0-5.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 11, name: 'Netflix', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/37/e4/39/37e439e7-c271-211b-e495-fa38eae72c70/AppIcon-1x_U007emarketing-0-85-220-0-9.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 12, name: 'Pandora', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/04/d3/17/04d31785-bd1d-e9a2-8071-e899e37858bc/mzl.piptyhvk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 13, name: 'Tinder', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0b/02/cc/0b02cce4-e4ca-516b-8f22-96281ea4d513/AppIcon-1x_U007emarketing-85-220-0-4.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 14, name: 'Snapchat', description: '1', category: 'Игры', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/39/c8/3e/39c83efb-6909-106e-43f9-fc84e3ad2791/mzl.jmjgtzpw.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 15, name: 'Facebook', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0a/08/cc/0a08cc88-6fa7-97e3-7d61-7bb9dadc6f38/Icon-Production-1x_U007emarketing-sRGB-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
				]
			},
			new_application: {
				name: 'Новое и интересное',
				data: [
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 10, name: 'Gmail', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/7c/6c/f2/7c6cf27c-6f13-0860-c443-ed923846f1f8/mzl.xwmfxurk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 11, name: 'Netflix', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/37/e4/39/37e439e7-c271-211b-e495-fa38eae72c70/AppIcon-1x_U007emarketing-0-85-220-0-9.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 9, name: 'Instagram', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/a2/a8/f9/a2a8f9db-a608-bc38-0403-900054c2cdda/Prod-1x_U007emarketing-85-220-0-5.png/53x53bb.png?h=is5.mzstatic.com', amount: 10},
					{id: 12, name: 'Pandora', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/04/d3/17/04d31785-bd1d-e9a2-8071-e899e37858bc/mzl.piptyhvk.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 13, name: 'Tinder', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0b/02/cc/0b02cce4-e4ca-516b-8f22-96281ea4d513/AppIcon-1x_U007emarketing-85-220-0-4.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 14, name: 'Snapchat', description: '1', category: 'Игры', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/39/c8/3e/39c83efb-6909-106e-43f9-fc84e3ad2791/mzl.jmjgtzpw.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 15, name: 'Facebook', description: '1', category: 'Программы', url: '',  icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/0a/08/cc/0a08cc88-6fa7-97e3-7d61-7bb9dadc6f38/Icon-Production-1x_U007emarketing-sRGB-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
				]
			},
			interesting: {
				name: 'Вам может понравиться',
				data: [
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
				]
			},
			popular: {
				name: 'Популярные коллекции',
				data: [
					{id: 1, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 2, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 3, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 4, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 5, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 6, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 7, icon: 'http://is1.mzstatic.com/image/thumb/Features122/v4/49/fa/3f/49fa3f55-fa58-f57c-01db-cf356d068cfb/source/400x196fa.jpg', name: '1', url: ''},
					{id: 8, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
					{id: 9, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 10, icon: 'http://is2.mzstatic.com/image/thumb/Features111/v4/26/60/eb/2660eb6a-366a-28d6-29f6-632b76cdaa49/source/400x196fa.jpg', name: '3', url: ''},
					{id: 11, icon: 'http://is4.mzstatic.com/image/thumb/Features127/v4/de/8c/9e/de8c9eb1-cb1e-2c50-00e0-063deafe6bf6/source/400x196fa.jpg', name: '2', url: ''},
				]
			},
			favorites: {
				name: 'Фавориты прошлых недель',
				data: [
					{id: 8, name: 'YouTube', description: '1', category: 'Программы', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/cb/3d/c6/cb3dc6e0-f795-2990-70b7-c5f8cfb87d80/AppIcon-1x_U007emarketing-85-220-0-6.png/53x53bb.png?h=is1.mzstatic.com', amount: 10},
					{id: 4, name: 'Plague inc.', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/3f/aa/e7/3faae778-513d-a0b7-7f67-918de51bc83d/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 7, name: 'Messenger', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/2e/d3/10/2ed310ed-d1c5-7861-b000-26b9097a8da2/Icon-Production-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is3.mzstatic.com', amount: 0},
					{id: 1, name: 'Heads Up!', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/27/d4/d4/27d4d4cf-c4aa-c5e5-8da0-1e70eb0cdde8/AppIcon-1x_U007emarketing-85-220-6.png/53x53bb.png?h=is5.mzstatic.com', amount: 0},
					{id: 5, name: 'HotSchedules', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/bb/8f/e2/bb8fe2bf-0f3d-5948-f937-e8643d85ef1f/AppIcon-1x_U007emarketing-85-220-0-5.jpeg/53x53bb.png?h=is4.mzstatic.com', amount: 0},
					{id: 3, name: 'kirakira+', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/39/df/e4/39dfe476-9fa2-5514-7139-46cd8b187f61/mzl.fuivurni.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
					{id: 6, name: 'Rush', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple128/v4/5c/d3/25/5cd32542-4a76-254f-0fc6-ec87233a14df/pr_source.jpg/53x53bb.png?h=is3.mzstatic.com', amount: 10},
					{id: 2, name: 'Minecraft', description: '1', category: 'Игры', url: '', icon: 'https://static.appfollow.io/image/thumb/Purple118/v4/db/13/8b/db138b3c-c8a5-d896-cd25-1cfb8a41dfb9/mzl.xnrakdei.png/53x53bb.png?h=is4.mzstatic.com', amount: 10},
				]
			}
		},
	};
