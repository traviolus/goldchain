// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: goldchain/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type QueryAccountGoldRequest struct {
	AccountAddress string `protobuf:"bytes,1,opt,name=account_address,json=accountAddress,proto3" json:"account_address,omitempty"`
}

func (m *QueryAccountGoldRequest) Reset()         { *m = QueryAccountGoldRequest{} }
func (m *QueryAccountGoldRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAccountGoldRequest) ProtoMessage()    {}
func (*QueryAccountGoldRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b7eae06bb3ec9c62, []int{0}
}
func (m *QueryAccountGoldRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAccountGoldRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAccountGoldRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAccountGoldRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAccountGoldRequest.Merge(m, src)
}
func (m *QueryAccountGoldRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAccountGoldRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAccountGoldRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAccountGoldRequest proto.InternalMessageInfo

func (m *QueryAccountGoldRequest) GetAccountAddress() string {
	if m != nil {
		return m.AccountAddress
	}
	return ""
}

type QueryAccountGoldResponse struct {
	Amount uint64 `protobuf:"varint,1,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (m *QueryAccountGoldResponse) Reset()         { *m = QueryAccountGoldResponse{} }
func (m *QueryAccountGoldResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAccountGoldResponse) ProtoMessage()    {}
func (*QueryAccountGoldResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b7eae06bb3ec9c62, []int{1}
}
func (m *QueryAccountGoldResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAccountGoldResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAccountGoldResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAccountGoldResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAccountGoldResponse.Merge(m, src)
}
func (m *QueryAccountGoldResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAccountGoldResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAccountGoldResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAccountGoldResponse proto.InternalMessageInfo

func (m *QueryAccountGoldResponse) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func init() {
	proto.RegisterType((*QueryAccountGoldRequest)(nil), "traviolus.goldchain.goldchain.QueryAccountGoldRequest")
	proto.RegisterType((*QueryAccountGoldResponse)(nil), "traviolus.goldchain.goldchain.QueryAccountGoldResponse")
}

func init() { proto.RegisterFile("goldchain/query.proto", fileDescriptor_b7eae06bb3ec9c62) }

var fileDescriptor_b7eae06bb3ec9c62 = []byte{
	// 288 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x91, 0x31, 0x4b, 0xc3, 0x40,
	0x14, 0xc7, 0x7b, 0xa0, 0x05, 0x6f, 0x50, 0x08, 0xa8, 0xa5, 0xe8, 0x21, 0x5d, 0x14, 0x87, 0x9c,
	0xad, 0xa0, 0x73, 0xba, 0x08, 0x6e, 0x66, 0x74, 0x91, 0x97, 0xe4, 0x48, 0x0f, 0x92, 0x7b, 0x69,
	0xde, 0xa5, 0xd8, 0xc1, 0xd5, 0xd9, 0x8f, 0xe5, 0xd8, 0xd1, 0x51, 0x92, 0x2f, 0x22, 0xc9, 0x95,
	0x56, 0x10, 0x05, 0xb7, 0x77, 0x3f, 0xfe, 0xbf, 0x3f, 0xef, 0xee, 0xf8, 0x61, 0x8a, 0x59, 0x12,
	0xcf, 0x40, 0x1b, 0x39, 0xaf, 0x54, 0xb9, 0xf4, 0x8b, 0x12, 0x2d, 0x7a, 0xa7, 0xb6, 0x84, 0x85,
	0xc6, 0xac, 0x22, 0x7f, 0x13, 0xd8, 0x4e, 0xc3, 0x93, 0x14, 0x31, 0xcd, 0x94, 0x84, 0x42, 0x4b,
	0x30, 0x06, 0x2d, 0x58, 0x8d, 0x86, 0x9c, 0x3c, 0xbc, 0x8c, 0x91, 0x72, 0x24, 0x19, 0x01, 0x29,
	0xd7, 0x2a, 0x17, 0xe3, 0x48, 0x59, 0x18, 0xcb, 0x02, 0x52, 0x6d, 0xba, 0xb0, 0xcb, 0x8e, 0xa6,
	0xfc, 0xf8, 0xa1, 0x4d, 0x04, 0x71, 0x8c, 0x95, 0xb1, 0x77, 0x98, 0x25, 0xa1, 0x9a, 0x57, 0x8a,
	0xac, 0x77, 0xce, 0x0f, 0xc0, 0xd1, 0x27, 0x48, 0x92, 0x52, 0x11, 0x0d, 0xd8, 0x19, 0xbb, 0xd8,
	0x0b, 0xf7, 0xd7, 0x38, 0x70, 0x74, 0x34, 0xe1, 0x83, 0x9f, 0x1d, 0x54, 0xa0, 0x21, 0xe5, 0x1d,
	0xf1, 0x3e, 0xe4, 0x2d, 0xed, 0xdc, 0x9d, 0x70, 0x7d, 0x9a, 0xbc, 0x32, 0xbe, 0xdb, 0x49, 0xde,
	0x0b, 0xe7, 0xad, 0x11, 0x74, 0xdc, 0xbb, 0xf1, 0xff, 0xbc, 0xb9, 0xff, 0xcb, 0xb2, 0xc3, 0xdb,
	0x7f, 0x7b, 0x6e, 0xc1, 0xe9, 0xfd, 0x7b, 0x2d, 0xd8, 0xaa, 0x16, 0xec, 0xb3, 0x16, 0xec, 0xad,
	0x11, 0xbd, 0x55, 0x23, 0x7a, 0x1f, 0x8d, 0xe8, 0x3d, 0x5e, 0xa5, 0xda, 0xce, 0xaa, 0xc8, 0x8f,
	0x31, 0x97, 0x9b, 0x72, 0xb9, 0xfd, 0xaf, 0xe7, 0x6f, 0xb3, 0x5d, 0x16, 0x8a, 0xa2, 0x7e, 0xf7,
	0xa6, 0xd7, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x37, 0x0e, 0x6c, 0xac, 0xd5, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	GoldAmount(ctx context.Context, in *QueryAccountGoldRequest, opts ...grpc.CallOption) (*QueryAccountGoldResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) GoldAmount(ctx context.Context, in *QueryAccountGoldRequest, opts ...grpc.CallOption) (*QueryAccountGoldResponse, error) {
	out := new(QueryAccountGoldResponse)
	err := c.cc.Invoke(ctx, "/traviolus.goldchain.goldchain.Query/GoldAmount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	GoldAmount(context.Context, *QueryAccountGoldRequest) (*QueryAccountGoldResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) GoldAmount(ctx context.Context, req *QueryAccountGoldRequest) (*QueryAccountGoldResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GoldAmount not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_GoldAmount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAccountGoldRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).GoldAmount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/traviolus.goldchain.goldchain.Query/GoldAmount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).GoldAmount(ctx, req.(*QueryAccountGoldRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "traviolus.goldchain.goldchain.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GoldAmount",
			Handler:    _Query_GoldAmount_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "goldchain/query.proto",
}

func (m *QueryAccountGoldRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAccountGoldRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAccountGoldRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.AccountAddress) > 0 {
		i -= len(m.AccountAddress)
		copy(dAtA[i:], m.AccountAddress)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.AccountAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAccountGoldResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAccountGoldResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAccountGoldResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Amount != 0 {
		i = encodeVarintQuery(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryAccountGoldRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.AccountAddress)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAccountGoldResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Amount != 0 {
		n += 1 + sovQuery(uint64(m.Amount))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryAccountGoldRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAccountGoldRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAccountGoldRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AccountAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AccountAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAccountGoldResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAccountGoldResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAccountGoldResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
