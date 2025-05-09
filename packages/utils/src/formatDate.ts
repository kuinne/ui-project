/**
 * 日期格式化工具函数
 * @param date 日期对象或时间戳
 * @param format 格式化模板，支持以下占位符：
 * - YYYY: 年份，如 2024
 * - MM: 月份，如 01-12
 * - DD: 日期，如 01-31
 * - HH: 小时，如 00-23
 * - mm: 分钟，如 00-59
 * - ss: 秒数，如 00-59
 * @returns 格式化后的日期字符串
 */
export function formatDate(
  date: Date | number | string,
  format: string = "YYYY-MM-DD"
): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    console.warn("Invalid date:", date);
    return "";
  }

  const formatMap: Record<string, number> = {
    YYYY: d.getFullYear(),
    MM: d.getMonth() + 1,
    DD: d.getDate(),
    HH: d.getHours(),
    mm: d.getMinutes(),
    ss: d.getSeconds(),
  };

  return format.replace(/(YYYY|MM|DD|HH|mm|ss)/g, (match) => {
    const value = formatMap[match];
    return match === "YYYY" ? String(value) : String(value).padStart(2, "0");
  });
}
