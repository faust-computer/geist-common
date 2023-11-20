import { IStdMsgsHeader } from './generated/msgs';

describe('IStdMsgsHeader Interface', () => {
  it('should conform to the IStdMsgsHeader structure', () => {
    const mockStdMsgsHeader: IStdMsgsHeader = {
      stamp: { sec: 123456, nanosec: 789 },
      frame_id: "frame_123"
    };

    expect(mockStdMsgsHeader).toHaveProperty('stamp');
    expect(typeof mockStdMsgsHeader.stamp).toBe('object');
    expect(mockStdMsgsHeader.stamp).toHaveProperty('sec');
    expect(typeof mockStdMsgsHeader.stamp.sec).toBe('number');
    expect(mockStdMsgsHeader.stamp).toHaveProperty('nanosec');
    expect(typeof mockStdMsgsHeader.stamp.nanosec).toBe('number');
    expect(mockStdMsgsHeader).toHaveProperty('frame_id');
    expect(typeof mockStdMsgsHeader.frame_id).toBe('string');
  });
});