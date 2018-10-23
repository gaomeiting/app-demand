export class Article {
	constructor({
        id,
        status,
        time,
        tags,
        gender,
        speed,
		demoTitle,
        demoContent,
        joinNum,
        publisher,
        incomeFrom,
        incomeTo
	}) {

		this.id = id;
		this.status = status;
		this.time = time;
		this.tags = tags;
		this.gender = gender;
		this.speed = speed;
		this.demoTitle = demoTitle;
		this.demoContent = demoContent;
		this.joinNum = joinNum;
		this.publisher = publisher;
		this.incomeFrom = incomeFrom;
		this.incomeTo = incomeTo;
	}
}
export function CreateArticle({
    id,
    status,
    time,
    tags,
    gender,
    speed,
    demoTitle,
    demoContent,
    joinNum,
    publisher,
    incomeFrom,
    incomeTo
}) {
	return new Article({
        id,
        status,
        time,
        tags,
        gender,
        speed,
		demoTitle,
        demoContent,
        joinNum,
        publisher,
        incomeFrom,
        incomeTo
	})
}