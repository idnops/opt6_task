import { MaybeRef, onMounted, ref, toValue } from "vue";

export const useTableResize = (el: MaybeRef) => {
  const currentCol = ref<HTMLElement | null>(null);
  const currentColWidth = ref(0);
  const pageX = ref(0);

  const start = (e: MouseEvent) => {
    currentCol.value = (e.target as HTMLElement).parentElement;
    currentColWidth.value = currentCol.value!.offsetWidth;
    pageX.value = e.pageX;
  };

  const end = () => {
    currentCol.value = null;
  };

  const handle = (e: MouseEvent) => {
    if (currentCol.value) {
      currentCol.value.style.width =
        currentColWidth.value + e.pageX - pageX.value + "px";
    }
  };
  onMounted(() => {
    const tableRef = toValue(el);
    (tableRef as HTMLElement).addEventListener("mousemove", handle);
  });

  return { start, end };
};
