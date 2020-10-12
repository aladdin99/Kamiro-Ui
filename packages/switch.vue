<template>
    <div class="uni-switch" :class="{'is-checked': value}"  @click="handleClick">
        <span class="uni-switch__core" ref="core">
            <span class="uni-switch__button"></span>
        </span>
        <input 
            type="checkbox"
            class="uni-switch__input"
            :name="name"
            ref="input"    
        >
    </div>
</template>

<script>
export default {
    name: 'uniSwitch',
    data(){
        return{

        }
    },
    props:{
        value: {
            type: Boolean,
            default: false
        },
        activeColor:{
            type: String,
            default: ""
        },
        inactiveColor:{
            type: String,
            default: ""
        },
        name:{//用于表单
            type: String,
            default: ""
        }
    },
    methods:{
        async handleClick(){
            this.$emit('input', !this.value);
            await this.$nextTick();
            this.setColor();
            this.$refs.input.value = this.value;
        },

        //开关按钮 颜色自定义
        setColor(){
            if(this.inactiveColor || this.activeColor){
                let color = this.value ? this.inactiveColor : this.activeColor;
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    },
    mounted(){
        this.setColor();
        this.$refs.input.value = this.value;
    }
}
</script>

<style lang="scss">
.uni-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .uni-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .uni-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .uni-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.uni-switch.is-checked {
  .uni-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .uni-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
