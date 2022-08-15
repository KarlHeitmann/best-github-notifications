class StaticPagesController < ApplicationController
  def home
    @notifications = current_user.nil? ? [] : HTTParty.get('https://api.github.com/notifications', headers: {
      Accept: "application/vnd.github+json",
      Authorization: "token #{current_user.token}"
    })# [0..5]
    # debugger
  end
end
