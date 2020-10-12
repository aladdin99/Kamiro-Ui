<template>
    <label class="uni-radio" :class="{'is-checked': label === model}">
        <span class="uni-radio__input">
            <span class="uni-radio__inner"></span>
            <input 
                class="uni-radio__original"
                type="radio"
                :value="label"
                :name="name"
                v-model="model"
            >
            <span class="uni-radio__label">
                <slot></slot>
                <!-- 如果 slot 中没有值那就默认使用 label 的值。 -->
                <template v-if="!$slots.default">{{label}}</template>
            </span>
        </span>
    </label>
</template>

<script>
export default {
    name: "uniRadio",
    inject:{
        RadioGroup:{
            default: ""
        }
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ""
        },
        value: null,
        name: {
            type: String,
            default: ""
        }
    },
    computed:{
        model: {
            get(){
                //this.RadioGroup.value
                return this.isGroup ? this.RadioGroup.value : this.value
            },
            set(value){
                this.isGroup ? this.RadioGroup.$emit("input", value) : this.$emit("input", value);
            }
        },
        isGroup(){
                //用于判断 radio 是否被 radioGroup 所包裹
                return !!this.RadioGroup
            }
    }
}
</script>

<style lang="scss">
.uni-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .uni-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .uni-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .uni-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .uni-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.uni-radio.is-checked {
  .uni-radio__input {
    .uni-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .uni-radio__label {
    color: #409eff;
  }
}
</style>
