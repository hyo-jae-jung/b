<script>
    import fastapi from "../lib/api"

    export let params = {} // Detail 컴포넌트 호출 시 가변적인 파라미터 값을 읽기 위한 변수 선언
    let question_id = params.question_id
    let question = {}

    function get_question() {
        fastapi("get","/api/question/detail/"+question_id,{},(json) => {
            question = json
        })
    }

    get_question()
</script>

<h1>{question.subject}</h1>
<div>
    {question.content}
</div>
