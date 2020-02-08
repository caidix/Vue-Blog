

<script>
export default {
  name: "Cd-Avatar",

  props: {
    size: {
      type: [Number, String],
      default: "large",
    },
    icon: String,
    src: String,
    alt: String
  },

  data() {
    return {
      isImageExist: true,
    };
  },

  computed: {
    avatarClass() {
      const { icon, size } = this;
      let classList = ["avatar", "circle"];
      if (size && typeof size === "string") {
        classList.push(`avatar-${size}`);
      }
      return classList.join(" ");
    }
  },

  methods: {
    renderAvatar() {
      const { src, icon, alt } = this;
      if (src) {
        return <img src={`/blog/img`+src} alt={alt} />;
      }
      if (icon) {
        return <svg-icon iconClass={icon} />;
      }
      return `<span></span>`;
    }
  },

  render() {
    const { avatarClass, size } = this;
    const sizeStyle = typeof size === 'number' ? {
      height: `${size}px`,
      width: `${size}px`,
      lineHeight: `${size}px`
    } : {};
    return (
      <span class={avatarClass} style={sizeStyle}>
        {this.renderAvatar()}
      </span>
    );
  }
};
</script>

<style lang="scss" scoped>
$sizes: (
  "small": "28px",
  "medium": "36px",
  "large": "50px"
);
@each $sizeKey, $size in $sizes {
  .avatar-#{$sizeKey} {
    height: $size;
    width: $size;
    line-height: $size;
  }
}
.avatar {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
}
.circle {
  border-radius: 50%;
}
</style>
