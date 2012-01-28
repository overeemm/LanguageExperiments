class StorageController < ApplicationController
  def index
  end

  def jsonlist
    @postits = Postit.all
    respond_to do |format|
      format.html
      format.json
    end
  end
end
