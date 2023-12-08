//
//  RatingView.swift
//  MerLive
//
//  Created by 五十嵐諒 on 2023/12/08.
//

import SwiftUI
import Charts

struct RatingView: View {
    @State var showingProfile:Bool = false
    @State var selectedSegment: Int = 0
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Image("Icon")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 120, height: 80)
                    .clipped()
                Spacer()
            }
            .padding(.horizontal, 4)
            .padding(.top, 24)
            .padding(.bottom, -8)
            Divider()
            HotView(showingProfile: $showingProfile)
            RankingTableView()
                .padding(.top, 16)
            Spacer()
        }
        .fullScreenCover(isPresented: $showingProfile) {
            VStack(spacing: 0){
                Image("Profile1")
                    .resizable()
                    .scaledToFit()
                Text("Kuzuha")
                    .foregroundColor(.white)
                    .font(.title)
                    .bold()
                    .padding(8)
                Picker("", selection: $selectedSegment){
                    Text("Rating").tag(0)
                    Text("Videos").tag(1)
                }
                .pickerStyle(SegmentedPickerStyle())
                .padding(.bottom,8)
                if selectedSegment == 0 {
                    HStack(spacing: 32) {
                        HStack{
                            Image(systemName: "arrow.up.right")
                                .foregroundStyle(.white)
                            Text("Trending")
                                .foregroundStyle(.white)
                        }
                        .padding(.vertical, 8)
                        .padding(.horizontal, 16)
                        .background {
                            RoundedRectangle(cornerSize: CGSize(width: 4, height: 4))
                                .foregroundStyle(.green)
                        }
                        VStack(alignment: .leading) {
                            Text("Owned")
                                .foregroundColor(.white)
                                .font(.caption)
                            Text("400(796yen)")
                                .foregroundColor(.white)
                                .bold()
                            Text("Rating")
                                .foregroundColor(.white)
                                .font(.caption)
                            Text("1.99")
                                .foregroundColor(.white)
                                .bold()
                            Text("Token Sum")
                                .foregroundColor(.white)
                                .font(.caption)
                            Text("4.5m")
                                .foregroundColor(.white)
                                .bold()
                        }
                    }
                    .padding(.horizontal, 32)
                    ChartView()
                        .padding(16)
                    Text("Tokenを売却する")
                        .bold()
                        .foregroundStyle(.white)
                        .frame(width: 320, height:60)
                        .background(
                            RoundedRectangle(cornerRadius: 16)
                                .foregroundStyle(.red)
                        )
                        .frame(maxWidth: .infinity)
                        .padding(.bottom, 32)
                } else {
                    ScrollView {
                        VStack {
                            Image("Video1")
                                .resizable()
                                .scaledToFit()
                                .cornerRadius(16)
                            Image("Video2")
                                .resizable()
                                .scaledToFit()
                                .cornerRadius(16)
                        }
                        .padding()
                    }
                    .padding(.horizontal, 16)
                }
                
            }
            .ignoresSafeArea()
            .background(.black)
        }
        .ignoresSafeArea()
    }
}


struct ChartView: View {
    let data = [1.2, 1.5, 1.3, 1.4, 1.8, 1.6, 1.7, 1.3, 1.4, 1.8, 1.6, 1.7, 2.1]
    var body: some View {
        Chart {
            ForEach(data.indices, id: \.self) { index in
                LineMark(
                    x: .value("Time", index),
                    y: .value("Value", data[index])
                )
                .foregroundStyle(.green) // 線の色を緑に設定
            }
        }
        .chartXAxis {
            AxisMarks(values: .automatic) { _ in
                AxisGridLine()
                    .foregroundStyle(.white)
                AxisTick()
                AxisValueLabel()
                    .foregroundStyle(.white)
            }
        }
        .chartYAxis {
            AxisMarks(values: .automatic) { _ in
                AxisGridLine()
                    .foregroundStyle(.white)
                AxisTick()
                AxisValueLabel()
                    .foregroundStyle(.white)
            }
        }
        .chartPlotStyle { plotArea in
            plotArea.background(Color.black) // 背景を黒に設定
        }
        .frame(width: 320, height: 100)
    }
}

struct HotView: View {
    var gradient: LinearGradient = .init(gradient: Gradient(colors: [.black.opacity(0.5), .white]), startPoint: .top, endPoint: .bottom)
    @Binding var showingProfile: Bool
    var body: some View {
        VStack {
            ZStack {
                Image("Profile3")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 120, height: 180)
                    .clipped()
                    .cornerRadius(8)
                    .offset(x: 120)
                
                Image("Profile2")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 140, height: 210)
                    .clipped()
                    .cornerRadius(8)
                    .offset(x: -110)
                Button {
                    withAnimation {
                        showingProfile = true
                    }
                } label: {
                    Image("Profile1")
                        .resizable()
                        .scaledToFill()
                        .frame(width: 160, height: 240)
                        .clipped()
                        .cornerRadius(8)
                        .offset(y: 40)
                }
            }
            .padding(.bottom, 56)
            Text("Trending Streamers")
                .font(.title)
                .bold()
                .italic()
        }
        .frame(maxWidth: .infinity)
        .background(gradient)
    }
}

struct RankingTableView: View {
    struct RawData: Identifiable {
        var id = UUID()
        var name: String
        var rate: Float
        var up: Bool
        var token: String
    }
    let rawDataList: [RawData] = [
        .init(name: "Kuzuha", rate: 1.99, up: true, token: "4.5k"),
        .init(name: "Kizunaai", rate: 1.45, up: true, token: "12k"),
        .init(name: "Samechan", rate: 1.33, up: true, token: "900"),
        .init(name: "Gaon", rate: 1.31, up: false, token: "11k"),
        .init(name: "Eru", rate: 1.22, up: true, token: "18k"),
        .init(name: "Banhada", rate: 1.08, up: false, token: "870"),
        .init(name: "Usadapekora", rate: 1.06, up: false, token: "4.1k"),
        .init(name: "Ponpoko", rate: 1.05, up: false, token: "25k"),
        .init(name: "Gaurugura", rate: 1.05, up: false, token: "1.1k")
    ]
    var body: some View {
        VStack(spacing: 4) {
            Text("Ranking")
                .font(.title3)
                .bold()
            HStack {
                Spacer()
                Text("name")
                Spacer()
                Spacer()
                Spacer()
                Text("rating")
                Spacer()
                Text("Tokens")
            }
            .padding(4)
            ForEach(rawDataList, id: \.name) { data in
                HStack {
                    Image(data.name)
                        .resizable()
                        .scaledToFill()
                        .frame(width: 24, height: 24)
                        .clipShape(Circle())
                    Text(data.name)
                    Spacer()
                    if data.up {
                        Image(systemName: "arrow.up")
                            .foregroundColor(.green)
                        Text(String(data.rate))
                            .foregroundColor(.green)
                    } else {
                        Image(systemName: "arrow.down")
                            .foregroundColor(.red)
                        Text(String(data.rate))
                            .foregroundColor(.red)
                    }
                    Text(data.token)
                        .padding(.leading, 40)
                }
                Divider()
            }
        }
        .padding(.horizontal, 32)
    }
}

#Preview {
    RatingView()
}
