require 'test/unit'
require 'recursive-binary-searcher'
require 'loop-binary-searcher'

class BinarySearchTest < Test::Unit::TestCase
  
  def test_rbs_chop
    rbs = RecursiveBinarySearcher.new
    test_chop(rbs)
  end

  def test_lbs_chop
    lbs = LoopBinarySearcher.new
    test_chop(lbs)
  end

  def test_chop(sr)
    assert_equal(-1, sr.chop(3, []))
    assert_equal(-1, sr.chop(3, [1]))
    assert_equal(0, sr.chop(1, [1]))

    assert_equal(0, sr.chop(1, [1, 3, 5]))
    assert_equal(1, sr.chop(3, [1, 3, 5]))
    assert_equal(2, sr.chop(5, [1, 3, 5]))
    assert_equal(-1, sr.chop(0, [1, 3, 5]))
    assert_equal(-1, sr.chop(2, [1, 3, 5]))
    assert_equal(-1, sr.chop(4, [1, 3, 5]))
    assert_equal(-1, sr.chop(6, [1, 3, 5]))

    assert_equal(0, sr.chop(1, [1, 3, 5, 7]))
    assert_equal(1, sr.chop(3, [1, 3, 5, 7]))
    assert_equal(2, sr.chop(5, [1, 3, 5, 7]))
    assert_equal(3, sr.chop(7, [1, 3, 5, 7]))
    assert_equal(-1, sr.chop(0, [1, 3, 5, 7]))
    assert_equal(-1, sr.chop(2, [1, 3, 5, 7]))
    assert_equal(-1, sr.chop(4, [1, 3, 5, 7]))
    assert_equal(-1, sr.chop(6, [1, 3, 5, 7]))
    assert_equal(-1, sr.chop(8, [1, 3, 5, 7]))
  end
end

