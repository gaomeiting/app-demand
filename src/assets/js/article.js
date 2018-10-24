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
        income
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
		this.income = income;
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
    income
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
        income
	})
}