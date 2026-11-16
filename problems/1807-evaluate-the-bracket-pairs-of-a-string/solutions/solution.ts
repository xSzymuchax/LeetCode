function evaluate(s: string, knowledge: string[][]): string {
    let dict = new Map<string, string>();
    for (const d of knowledge) {
        dict.set(d[0], d[1]);
    }
    
    let answer ="";
    let tokens = s.split("(");
    
    for (const t of tokens){
        if (t == "") continue;
        
        let tokens2 = t.split(")");
        
        if (tokens2.length == 1) {
            answer+=t;
            continue;
        }
            
        
        if (dict.has(tokens2[0])) {
            answer += dict.get(tokens2[0]);
        }
        else {
            answer += "?";
        }
        answer += tokens2[1];
    }
    
    return answer;
};
