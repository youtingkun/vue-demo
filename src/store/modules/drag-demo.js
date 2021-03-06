import Vue from 'vue';
import { deepCopy, swap } from '@/views/wheel/drag-demo/utils/utils';
import toast from '@/views/wheel/drag-demo/utils/toast';
import generateID from '@/views/wheel/drag-demo/utils/generateID';

export default {
	namespaced: true,
	state: {
		editMode: 'edit', // 编辑器模式 edit read
		canvasStyleData: {
			// 页面全局数据
			width: 1200,
			height: 740,
		},
		componentData: [], // 画布组件数据
		curComponent: null,
		curComponentIndex: null,
		snapshotData: [], // 编辑器快照数据
		snapshotIndex: -1, // 快照索引
		menuTop: 0, // 右击菜单数据
		menuLeft: 0,
		menuShow: false,
		copyData: null, // 复制粘贴剪切
	},
	// actions: {
	// 	paste({ state, commit }, isMouse) {
	// 		if (!state.copyData) {
	// 			toast('请选择组件');
	// 			return;
	// 		}

	// 		const data = state.copyData.data;

	// 		if (isMouse) {
	// 			data.style.top = state.menuTop;
	// 			data.style.left = state.menuLeft;
	// 		} else {
	// 			data.style.top += 10;
	// 			data.style.left += 10;
	// 		}

	// 		data.id = generateID();
	// 		commit('addComponent', { component: data });
	// 		commit('recordSnapshot');
	// 		state.copyData = null;
	// 	},
	// 	cut(state, commit) {
	// 		if (!state.curComponent) {
	// 			toast('请选择组件');
	// 			return;
	// 		}

	// 		if (state.copyData) {
	// 			commit('addComponent', { component: state.copyData.data, index: state.copyData.index });
	// 			if (state.curComponentIndex >= state.copyData.index) {
	// 				// 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
	// 				state.curComponentIndex++;
	// 			}
	// 		}

	// 		commit('copy');
	// 		commit('deleteComponent');
	// 	},
	// 	undo({ state, commit }) {
	// 		if (state.snapshotIndex >= 0) {
	// 			state.snapshotIndex--;
	// 			console.log('undo', state.snapshotIndex);
	// 			commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]));
	// 		}
	// 	},
	// 	redo({ state, commit }) {
	// 		if (state.snapshotIndex < state.snapshotData.length - 1) {
	// 			state.snapshotIndex++;
	// 			commit('setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]));
	// 		}
	// 	},
	// },
	mutations: {
		copy(state) {
			state.copyData = {
				data: deepCopy(state.curComponent),
				index: state.curComponentIndex,
			};
		},

		paste(state, isMouse) {
			if (!state.copyData) {
				toast('请选择组件');
				return;
			}

			const data = state.copyData.data;

			if (isMouse) {
				data.style.top = state.menuTop;
				data.style.left = state.menuLeft;
			} else {
				data.style.top += 10;
				data.style.left += 10;
			}

			data.id = generateID();
			// 这里的this是根store对象
			this.commit('dragDemo/addComponent', { component: data });
			this.commit('dragDemo/recordSnapshot');
			state.copyData = null;
		},

		cut(state) {
			if (!state.curComponent) {
				toast('请选择组件');
				return;
			}

			if (state.copyData) {
				this.commit('dragDemo/addComponent', { component: state.copyData.data, index: state.copyData.index });
				if (state.curComponentIndex >= state.copyData.index) {
					// 如果当前组件索引大于等于插入索引，需要加一，因为当前组件往后移了一位
					state.curComponentIndex++;
				}
			}

			this.commit('dragDemo/copy');
			this.commit('dragDemo/deleteComponent');
		},

		setEditMode(state, mode) {
			state.editMode = mode;
		},

		setCanvasStyle(state, style) {
			state.canvasStyleData = style;
		},

		addComponent(state, { component, index }) {
			console.log(component, index);
			if (index !== undefined) {
				state.componentData.splice(index, 0, component);
			} else {
				state.componentData.push(component);
			}
		},

		setCurComponent(state, { component, index }) {
			state.curComponent = component;
			state.curComponentIndex = index;
		},

		setShapeStyle({ curComponent }, { top, left, width, height, rotate }) {
			if (top) curComponent.style.top = top;
			if (left) curComponent.style.left = left;
			if (width) curComponent.style.width = width;
			if (height) curComponent.style.height = height;
			if (rotate) curComponent.style.rotate = rotate;
		},

		setShapePosStyle({ curComponent }, { key, value }) {
			curComponent.style[key] = value;
		},

		undo(state) {
			if (state.snapshotIndex >= 0) {
				state.snapshotIndex--;
				this.commit('dragDemo/setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]));
			}
		},

		redo(state) {
			if (state.snapshotIndex < state.snapshotData.length - 1) {
				state.snapshotIndex++;
				this.commit('dragDemo/setComponentData', deepCopy(state.snapshotData[state.snapshotIndex]));
			}
		},

		// 解决vue监听不到数组变化的问题
		setComponentData(state, componentData = []) {
			Vue.set(state, 'componentData', componentData);
		},

		recordSnapshot(state) {
			// 添加新的快照
			state.snapshotData[++state.snapshotIndex] = deepCopy(state.componentData);
			// 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
			if (state.snapshotIndex < state.snapshotData.length - 1) {
				state.snapshotData = state.snapshotData.slice(0, state.snapshotIndex + 1);
			}
		},

		showContexeMenu(state, { top, left }) {
			state.menuShow = true;
			state.menuTop = top;
			state.menuLeft = left;
		},

		hideContexeMenu(state) {
			state.menuShow = false;
		},

		deleteComponent(state, index = state.curComponentIndex) {
			state.componentData.splice(index, 1);
		},

		upComponent({ componentData, curComponentIndex }) {
			// 上移图层 index，表示元素在数组中越往后
			if (curComponentIndex < componentData.length - 1) {
				swap(componentData, curComponentIndex, curComponentIndex + 1);
			} else {
				toast('已经到顶了');
			}
		},

		downComponent({ componentData, curComponentIndex }) {
			// 下移图层 index，表示元素在数组中越往前
			if (curComponentIndex > 0) {
				swap(componentData, curComponentIndex, curComponentIndex - 1);
			} else {
				toast('已经到底了');
			}
		},

		topComponent({ componentData, curComponentIndex }) {
			// 置顶
			if (curComponentIndex < componentData.length - 1) {
				swap(componentData, curComponentIndex, componentData.length - 1);
			} else {
				toast('已经到顶了');
			}
		},

		bottomComponent({ componentData, curComponentIndex }) {
			// 置底
			if (curComponentIndex > 0) {
				swap(componentData, curComponentIndex, 0);
			} else {
				toast('已经到底了');
			}
		},

		addAnimation({ curComponent }, animation) {
			curComponent.animations.push(animation);
		},

		removeAnimation({ curComponent }, index) {
			curComponent.animations.splice(index, 1);
		},

		addEvent({ curComponent }, { event, param }) {
			curComponent.events[event] = param;
		},

		removeEvent({ curComponent }, event) {
			delete curComponent.events[event];
		},
	},
};
