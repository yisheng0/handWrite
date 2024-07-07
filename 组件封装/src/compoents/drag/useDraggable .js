import { onBeforeUnmount, onMounted, watchEffect } from 'vue'
function addUnit(value, unit = 'px') {
    if (typeof value === 'number' && !isNaN(value)) {
      if (!unit || typeof unit !== 'string') {
        unit = 'px';
      }
      return `${value}${unit.toLowerCase()}`;
    } else {
      throw new Error('The first argument must be a valid number.');
    }
  }

export  const  useDraggable = (
  targetRef,
  draggable,
  overflow
) => 
{
  let transform = {
    offsetX: 0,
    offsetY: 0,
  }

  const onMousedown = (e) => {
    const downX = e.clientX
    const downY = e.clientY
    const { offsetX, offsetY } = transform

    const targetRect = targetRef.value.getBoundingClientRect()
    const targetLeft = targetRect.left
    const targetTop = targetRect.top
    const targetWidth = targetRect.width
    const targetHeight = targetRect.height

    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    const minLeft = -targetLeft + offsetX
    const minTop = -targetTop + offsetY
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
    const maxTop = clientHeight - targetTop - targetHeight + offsetY

    const onMousemove = (e) => {
      let moveX = offsetX + e.clientX - downX
      let moveY = offsetY + e.clientY - downY

      if (!overflow?.value) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft)
        moveY = Math.min(Math.max(moveY, minTop), maxTop)
      }

      transform = {
        offsetX: moveX,
        offsetY: moveY,
      }

      if (targetRef.value) {
        targetRef.value.style.transform = `translate(${addUnit(
          moveX
        )}, ${addUnit(moveY)})`
      }
    }

    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove)
      document.removeEventListener('mouseup', onMouseup)
    }

    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  }

  const onDraggable = () => {
    if (targetRef.value && targetRef.value) {
      targetRef.value.addEventListener('mousedown', onMousedown)
    }
  }

  const offDraggable = () => {
    if (targetRef.value && targetRef.value) {
      targetRef.value.removeEventListener('mousedown', onMousedown)
    }
  }

  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable()
      } else {
        offDraggable()
      }
    })
  })

  onBeforeUnmount(() => {
    offDraggable()
  })
}
