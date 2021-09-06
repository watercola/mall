import {debounce} from "./utils";
import BackTop from "components/content/backtop/BackTop";

export const itemlistenmixin = {
  data() {
    return {
      itemImgListener: null,
      newfresh: null,
    }
  },
  mounted() {
    this.newfresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      this.newfresh()
    }
    this.$bus.$on('imgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      istopshow: false,
    }
  },
  methods: {
    //监听pullback按钮
    backclick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showbacktop(position, BACK_POSITION) {
      this.istopshow = -position.y > BACK_POSITION
    }
  }
}
