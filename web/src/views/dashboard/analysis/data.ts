export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '正常',
    icon: 'visit-count|svg',
    value: 21,
    total: 120000,
    color: 'green',
    action: '正常',
  },
  {
    title: '告警',
    icon: 'total-sales|svg',
    value: 2,
    total: 500000,
    color: 'blue',
    action: '告警',
  },
  {
    title: '故障',
    icon: 'download-count|svg',
    value: 1,
    total: 120000,
    color: 'orange',
    action: '故障',
  },
  {
    title: '失联',
    icon: 'transaction|svg',
    value: 1,
    total: 50000,
    color: 'purple',
    action: '失联',
  },
];
