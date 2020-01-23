function TraceInfoFlag() {
    this.traceFlag = new Array();
    this.traceFlag["try1.cpp:30c37"]=1;
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["try1.cpp:30"]=1;
    this.lineTraceFlag["try1.cpp:35"]=1;
    this.lineTraceFlag["try1.h:43"]=1;
    this.lineTraceFlag["try1.h:48"]=1;
    this.lineTraceFlag["try1.h:49"]=1;
    this.lineTraceFlag["try1.h:54"]=1;
    this.lineTraceFlag["try1.h:57"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();
