function isValid(s: string): boolean {
    let stack: string[] = [];

    for (const c of s){
        if (c == '{' || c == '(' || c=='[')
            stack.push(c);
        else
        {
            if (stack.length > 0){
                let x = stack.pop();
                if ((x == '[' && c == ']') ||
                    (x == '(' && c == ')') ||
                    (x == '{' && c == '}'))
                    continue;
                else
                    return false;
            }
            else 
                return false;
        }
    }

    if (stack.length != 0)
        return false;

    return true;
};
