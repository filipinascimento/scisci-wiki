# Contribution-statement NLP activity extraction

## Summary

Contribution-statement NLP activity extraction uses natural-language processing to map author contribution statements into author-activity links before role classification.

## Canonical Form

- Unit of analysis: contribution statement sentence, author, activity phrase, paper, or journal corpus.
- Typical method: extract sentence subjects and predicates, associate authors with research activities, then cluster or classify activity roles.
- Measurement target: structured contribution roles from semi-structured prose.
- Empirical signature: a small set of high-frequency activities covers most contribution-statement content.

## Uses in Science of Science

- Preprocesses [author contribution statements](../datasets/author_contribution_statements.md).
- Feeds [contribution activity modularity clustering](contribution_activity_modularity_clustering.md).
- Supports [contribution role vectors](../representations/contribution_role_vectors.md) and [lead-role ratio](../measures/lead_role_ratio.md).
- Provides training data for [contributorship prediction models](contributorship_prediction_models.md).

## Operationalization

- Parse contribution statements at sentence level.
- Identify authors named in each sentence.
- Extract predicates or activity phrases linked to those authors.
- Normalize activity vocabulary and retain high-coverage activities for clustering or lead/support classification.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) applies NLP to contribution statements from Nature journals and PLOS ONE.
- The paper extracts subjects and predicates, identifies author-associated research activities, and reports that the top 25 activities cover most of the data.
- These extracted activities are then used to construct lead, direct-support, and indirect-support role categories.

## Caveats

- Contribution statements differ across journals and years.
- NLP extraction can miss implicit labor, shared roles, and ambiguous author mentions.
- High-frequency activity coverage does not guarantee coverage of rare but important scientific work.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution activity modularity clustering](contribution_activity_modularity_clustering.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; SciSciNet: W4226148732; WoS: unknown]

## Metadata

- Concept ID: `contribution_statement_nlp_activity_extraction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: contribution NLP extraction; author-activity extraction; contribution statement activity parsing
