# Sand Smoke Proxy

©2024 mino_hobby

開発者向け外部プロキシの実装

いつまでもGoogleScriptに頼っていてはいけないと思い作成しました。およそ2000個のYUKIやinvidiousやその他の代替から取得しています。
API　https://new-era-hack.vercel.app/api/fetch?video_id=ビデオID　　　　
このAPIはいつか使えなくなることを理解してください。使用は自由です

## デプロイ

以下のボタンをクリックして、各プラットフォームにデプロイできます。renderによるホストを強くお勧めします。

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mino-hobby-pro/sand-smoke-proxy)  
[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://koyeb.com/deploy?type=github&repository=https://github.com/mino-hobby-pro/sand-smoke-proxy)  
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/mino-hobby-pro/sand-smoke-proxy)


---

# SandSmoke

![SandSmoke](https://tse4.mm.bing.net/th?id=OIG4.gDAHAlmQD0nqjGKj5ehr&pid=ImgGn)

## 概要

SandSmokeは、プライバシーを重視した動画ストリーミングプラットフォームです。このプロジェクトは、ユーザーが広告なしで、また追跡されることなく、動画を視聴することを可能にします。SandSmokeは、YouTubeなどの主要な動画サイトのコンテンツを利用し、ユーザーに快適な視聴体験を提供します。さらに、WebUnblocker機能を搭載しており、地域制限を回避し、どこからでもコンテンツにアクセスできるようにします。

## 特徴

- **プライバシー重視**: ユーザーのデータを追跡せず、広告を表示しません。
- **WebUnblocker**: 地域制限を回避し、世界中のコンテンツにアクセス可能。
- **シンプルなインターフェース**: 使いやすいデザインで、直感的に操作できます。
- **オープンソース**: コードはGitHubで公開されており、誰でも貢献できます。

## インストール

### 必要条件

- Python 3.7 以上
- PostgreSQL 12 以上
- Node.js 14 以上

### 手順

1. リポジトリをクローンします。
    ```bash
    git clone https://github.com/mino-hobby-pro/sand-smoke-proxy/
    cd SandSmoke
    ```

2. 必要なパッケージをインストールします。
    ```bash
    pip install -r requirements.txt
    ```

3. データベースをセットアップします。
    ```bash
    python manage.py migrate
    ```

4. アプリケーションを起動します。
    ```bash
    python manage.py runserver
    ```

5. ブラウザで `http://localhost:8000` にアクセスします。

## 使用方法

1. ウェブブラウザでSandSmokeにアクセスします。
2. 動画を検索バーに入力し、動画を選択します。
3. 再生ボタンをクリックして、動画を視聴します。

## 開発

### コントリビュート

1. フォークします。
2. ブランチを作成します。
    ```bash
    git checkout -b feature/YourFeature
    ```
3. 変更をコミットします。
    ```bash
    git commit -m 'Add some feature'
    ```
4. プッシュします。
    ```bash
    git push origin feature/YourFeature
    ```
5. プルリクエストを送信します。

### テスト

テストは以下のコマンドで実行できます。
```bash
python manage.py test
```

## ライセンス

SandSmokeはMITライセンスのもとで提供されています。詳細はLICENSEファイルを参照してください。

## お問い合わせ

質問やフィードバックがある場合は、以下の連絡先までご連絡ください。

- Discord: https://discord.gg/8nedA5ZYy8
- GitHub: [GitHub Issues](https://github.com/mino-hobby-pro/sand-smoke-proxy/)

---

# SandSmoke

![SandSmoke](https://tse4.mm.bing.net/th?id=OIG4.gDAHAlmQD0nqjGKj5ehr&pid=ImgGn)

## Overview

SandSmoke is a video streaming platform that prioritizes privacy. This project enables users to watch videos without advertisements and without being tracked. SandSmoke utilizes content from major video sites like YouTube, providing users with a comfortable viewing experience. Additionally, it comes equipped with a WebUnblocker feature that allows users to bypass regional restrictions and access content from anywhere in the world.

## Features

- **Privacy-Focused**: Does not track user data and does not display ads.
- **WebUnblocker**: Bypasses regional restrictions, allowing access to content worldwide.
- **Simple Interface**: Easy-to-use design for intuitive navigation.
- **Open Source**: The code is publicly available on GitHub, allowing anyone to contribute.

## Installation

### Requirements

- Python 3.7 or higher
- PostgreSQL 12 or higher
- Node.js 14 or higher

### Steps

1. Clone the repository.
    ```bash
    git clone https://github.com/your-repo/SandSmoke.git
    cd SandSmoke
    ```

2. Install the required packages.
    ```bash
    pip install -r requirements.txt
    ```

3. Set up the database.
    ```bash
    python manage.py migrate
    ```

4. Start the application.
    ```bash
    python manage.py runserver
    ```

5. Access the application in your browser at `http://localhost:8000`.

## Usage

1. Navigate to SandSmoke in your web browser.
2. Enter a video title in the search bar and select a video.
3. Click the play button to start watching the video.

## Development

### Contributing

1. Fork the repository.
2. Create a branch.
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes.
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch.
    ```bash
    git push origin feature/YourFeature
    ```
5. Submit a pull request.

### Testing

You can run tests using the following command:
```bash
python manage.py test
```

## License

SandSmoke is provided under the MIT License. Please refer to the LICENSE file for details.

