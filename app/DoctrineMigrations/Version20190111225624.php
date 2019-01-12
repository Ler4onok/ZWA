<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20190111225624 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C896DBBDE');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CB03A8386');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CC76F1F52');
        $this->addSql('DROP INDEX IDX_9474526CB03A8386 ON comment');
        $this->addSql('DROP INDEX IDX_9474526C896DBBDE ON comment');
        $this->addSql('DROP INDEX IDX_9474526CC76F1F52 ON comment');
        $this->addSql('ALTER TABLE comment ADD created_by VARCHAR(255) DEFAULT NULL, ADD updated_by VARCHAR(255) DEFAULT NULL, ADD deleted_by VARCHAR(255) DEFAULT NULL, DROP updated_by_id, DROP created_by_id, DROP deleted_by_id');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comment ADD updated_by_id INT DEFAULT NULL, ADD created_by_id INT DEFAULT NULL, ADD deleted_by_id INT DEFAULT NULL, DROP created_by, DROP updated_by, DROP deleted_by');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C896DBBDE FOREIGN KEY (updated_by_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CB03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CC76F1F52 FOREIGN KEY (deleted_by_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_9474526CB03A8386 ON comment (created_by_id)');
        $this->addSql('CREATE INDEX IDX_9474526C896DBBDE ON comment (updated_by_id)');
        $this->addSql('CREATE INDEX IDX_9474526CC76F1F52 ON comment (deleted_by_id)');
    }
}
