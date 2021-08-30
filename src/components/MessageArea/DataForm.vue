<template>
  <form id="dataForm-container" class="dataForm-container" ref="form" @submit.prevent="handleSubmit">
    <div class="form-item">
      <div class="text">
        <input
          type="text"
          v-model="formData.nickname"
          maxlength="10"
          placeholder="用户昵称"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="textarea">
        <textarea
          v-model="formData.content"
          maxlength="300"
          placeholder="输入内容"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      // 防止重复提交
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.error.content = this.formData.content ? "" : "内容不能为空";
      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      // 让父组件处理事件
      this.$emit("submit", this.formData, () => {
        this.$showMessage({
          content: "评论成功",
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.dataForm-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.text {
  width: 50%;
  position: relative;
}
.textarea {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>