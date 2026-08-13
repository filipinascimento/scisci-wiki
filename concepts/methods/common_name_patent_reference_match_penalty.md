# Common-name patent-reference match penalty

## Summary

Common-name patent-reference match penalty is a scoring rule that downweights author-name evidence in patent-paper matching when surnames are frequent, name-like tokens are ambiguous, or initials conflict.

## Canonical Form

- Unit of analysis: surname token, author field, candidate paper, patent NPL string, or match score.
- Typical representation: common-name frequency penalty, generic-token penalty, first-initial mismatch penalty, fuzzy-surname penalty, or two-letter-name exclusion.
- Method target: prevent frequent names from generating high-confidence false patent-paper links.
- Empirical signature: a candidate with weak title/VIP support and only a common surname receives a lower score than a candidate supported by rarer author evidence.

## Uses in Science of Science

- Specializes [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md) for author-name evidence.
- Connects patent-reference matching to the broader [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md) problem without treating patent references as author-identity resolution.
- Supports confidence thresholds for [patent-science link confidence score](../measures/patent_science_link_confidence_score.md).
- Helps separate false positives caused by common names from false positives caused by [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md).

## Operationalization

- Estimate surname frequency in the publication backbone or in the candidate-generation corpus.
- Penalize surnames that are very frequent, two letters long, month-like, given-name-like, scientific-term-like, or compatible with many candidate papers.
- Penalize first-initial conflicts and fuzzy-surname-only evidence.
- Require stronger title, journal, volume, issue, or page support when author evidence is common or ambiguous.
- Audit precision by surname-frequency strata.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) reports that common surnames can create massive overmatching in patent-reference matching.
- Their scoring procedure downweights surnames that are frequent, generic, month-like, given-name-like, scientific-term-like, two-letter names, or inconsistent with first initials.
- The motif is method-specific: it concerns author-name evidence as a patent-reference matching feature, not the construction of author career identities.

## Caveats

- Name frequency varies by country, language, and publication backbone.
- Overly aggressive penalties can reduce recall for papers by authors with common names.
- The penalty should be calibrated jointly with title, journal, and volume/issue/page evidence rather than used alone.

## Links

- [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md)
- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [author-name blocking](author_name_blocking.md)
- [score-stratified match precision audit](../validations/score_stratified_match_precision_audit.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `common_name_patent_reference_match_penalty`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: common surname match penalty; patent author-name overmatch penalty; surname-frequency patent matching; ambiguous author evidence penalty
