// 这道题用了 Java 是需要用到了优先队列
// 反正 JS 和 Java 看起来也是相通的
class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals.length == 0) return 0;
        // 排序
        Arrays.sort(intervals, (a,b) -> a[0] - b[0]);
        // 创建一个队列，最小的排前面
        // 队列里存的是会议结束时间相交的数据
        PriorityQueue<Integer> q = new PriorityQueue<>(intervals.length, (a,b) -> a - b);
        // 队列里添加数据，这里添加的是会议结束数据
        q.offer(intervals[0][1]);
        for (int i = 1; i < intervals.length; i++) {
            // 如果当前会议的开始时间大于别的会议结束时间，说明不需要会议室
            if(intervals[i][0] >= q.peek()){
                q.poll();
            }
            q.offer(intervals[i][1]);
        }
        return q.size();
    }
}