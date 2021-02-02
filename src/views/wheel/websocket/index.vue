<template>
	<div>
		<form onsubmit="return false;">
			<h3>WebSocket 聊天室：</h3>
			<el-input type="textarea" id="responseText" v-model="textValue" :autosize="{ minRows: 3, maxRows: 100 }"></el-input>
			<br />
			<el-input type="text" style="width: 300px" value="Welcome to waylau.com" v-model="message" />
			<el-button @click="send()">发送消息</el-button>
			<el-button @click="reset()">清空聊天记录</el-button>
		</form>
	</div>
</template>

<script>
import socket from '@/utils/socket';
export default {
	name: '',
	data() {
		return {
			socket: '',
			textValue: 'websocket',
			message: '',
		};
	},
	mounted() {
		this.initSocket();
	},
	methods: {
		initSocket() {
			this.socket = socket();
			this.socket.onmessage = this.onmessage;
		},
		// 接受消息事件，处理函数
		onmessage(event) {
			this.textValue = this.textValue + '\n' + event.data;
		},
		send() {
			if (this.socket.readyState == WebSocket.OPEN) {
				this.socket.send(this.message);
			} else {
				alert('连接没有开启.');
			}
		},
		reset() {
			this.textValue = '';
		},
	},
};
</script>

<style scoped></style>
