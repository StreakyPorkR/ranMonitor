<template>
  <Card title="当前系统健康度" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from 'vue';
  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const props = defineProps({
    loading: Boolean,
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '300px',
    },
  });

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  var branch = 32,
    branchTotal = 146;
  var species = 82,
    speciesTotal = 608;
  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return;
      }
      setOptions({
        title: [
          {
            text: '系统整体',
            textStyle: {
              fontSize: 14,
              color: '#333',
            },
            subtext: '稳定性',
            subtextStyle: {
              color: '#333',
              fontSize: 14,
              fontWeight: 'bold',
            },
            left: '20%',
            top: '75%',
            textAlign: 'center',
          },
          {
            text: '系统整体',
            textStyle: {
              fontSize: 14,
              color: '#333',
            },
            subtext: '健康度',
            subtextStyle: {
              color: '#333',
              fontSize: 14,
              align: 'center',
              fontWeight: 'bold',
            },
            left: '70%',
            top: '75%',
            textAlign: 'center',
          },
        ],
        series: [
          {
            name: '稳定性',
            type: 'pie',
            hoverAnimation: false,
            radius: ['40%', '50%'],
            center: ['25%', '40%'],
            label: {
              show: false,
            },
            data: [
              {
                value: branch,
                name: '稳定性',
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{b|{b}}\n{d|{d}}%',
                  rich: {
                    b: {
                      fontSize: 14,
                      lineHeight: 30,
                      color: '#333',
                    },
                    d: {
                      fontSize: 24,
                      color: '#333',
                      fontWeight: 'bold',
                    },
                  },
                  color: '#333',
                },
                itemStyle: {
                  normal: {
                    color: '#1890FF',
                  },
                },
              },
              {
                value: branchTotal - branch,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#F0F2F5',
                  },
                },
              },
            ],
          },
          {
            name: '健康度',
            type: 'pie',
            hoverAnimation: false,
            radius: ['40%', '50%'],
            center: ['75%', '40%'],
            label: {
              show: false,
            },
            data: [
              {
                value: species, //需要显示的数据
                name: '健康度',
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{b|{b}}\n{d|{d}}%',
                  rich: {
                    b: {
                      fontSize: 14,
                      lineHeight: 30,
                      color: '#333',
                    },
                    d: {
                      fontSize: 24,
                      color: '#333',
                      fontWeight: 'bold',
                    },
                  },
                  color: '#333',
                },
                itemStyle: {
                  normal: {
                    color: '#FAFA14',
                  },
                },
              },
              {
                value: speciesTotal - species,
                //不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#F0F2F5',
                  },
                },
              },
            ],
          },
        ],
      });
    },
    { immediate: true },
  );
</script>
