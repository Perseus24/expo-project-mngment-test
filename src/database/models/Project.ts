import { Model } from '@nozbe/watermelondb'
import { writer, date, text } from '@nozbe/watermelondb/decorators'

export default class Project extends Model {
    static table = 'projects'

    @text('title') title!: string
    @text('status') status!: string
    @text('description') description!: string
    @date('created_at') createdAt!: Date

    @writer async updateStatus(newStatus: string) {
        await this.update(project => {
            project.status = newStatus
        })
    }

    @writer async updateDescription(newDescription: string) {
        await this.update(project => {
            project.description = newDescription
        })
    }

    @writer async updateTitle(newTitle: string) {
        await this.update(project => {
            project.title = newTitle
        })
    }
}