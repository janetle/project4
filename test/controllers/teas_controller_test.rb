require 'test_helper'

class TeasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teas_index_url
    assert_response :success
  end

end
