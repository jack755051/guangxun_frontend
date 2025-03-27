import os
import shutil
import subprocess
import platform
import stat

def on_rm_error(func, path, exc_info):
    os.chmod(path, stat.S_IWRITE)
    func(path)

def clean_git():
    """刪除 .git 並重新初始化 Git（跨平台支援）"""
    system = platform.system()
    print(f"🖥 系統偵測到：{system}")

    if os.path.exists(".git"):
        print("🔄 正在刪除 `.git` 目錄...")

        if system == "Windows":
            shutil.rmtree(".git", onerror=on_rm_error)  # Windows: 權限處理
        else:
            shutil.rmtree(".git")  # macOS / Linux: 直接刪

        print("✅ `.git` 目錄已刪除")
    else:
        print("⚠ `.git` 目錄不存在，跳過刪除")

    print("🔄 重新初始化 Git...")
    subprocess.run(["git", "init"], check=True)
    print("✅ Git 初始化完成")

    print("🔄 建立初始 Commit...")
    subprocess.run(["git", "add", "."], check=True)
    subprocess.run(["git", "commit", "-m", "Initial commit after cleanup"], check=True)
    print("✅ 初始 Commit 完成")

    print("\n🚀 如果要重新設置遠端倉庫，請執行：")
    print("   git remote add origin <your-repo-url>")
    print("   git push -u origin main")

if __name__ == "__main__":
    clean_git()
