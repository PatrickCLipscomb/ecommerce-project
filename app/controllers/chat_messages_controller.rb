class ChatMessagesController < ApplicationController

  def create
    chat_room = ChatRoom.find(params[:chat_message][:chat_room_id])
    chat_message = chat_room.chat_messages.new(chat_message_params)
    chat_message.user = current_user
    if chat_message.save
      ActionCable.server.broadcast 'chat_messages',
        title: chat_message.chat_room.title.split(' ')[0],
        chat_message: chat_message.body,
        user: chat_message.user.user_name
      head :ok
    else
      flash[:alert] = "You must be logged in to chat"
      redirect_to categories_path
    end
  end

  private

    def chat_message_params
      params.require(:chat_message).permit(:body, :chat_room_id)
    end
end
