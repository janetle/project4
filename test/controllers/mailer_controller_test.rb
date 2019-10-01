require 'test_helper'

class MailerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mailer_index_url
    assert_response :success
  end

  test "should get new" do
    get mailer_new_url
    assert_response :success
  end

  test "should get create" do
    get mailer_create_url
    assert_response :success
  end

end
