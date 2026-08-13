# Richer author evidence scoring

## Summary

Richer author evidence scoring improves patent-paper match confidence by using given names, multiple listed authors, and author-year publication priors rather than only first-surname evidence.

## Canonical Form

- Unit of analysis: patent reference string, candidate paper, author field, publication year, or match score.
- Typical representation: additional author-evidence features in a patent-paper confidence model.
- Method target: reduce ambiguous patent-reference matches when minimal surname evidence is insufficient.
- Empirical signature: matches are penalized or promoted based on richer author agreement and the density of same-author candidates.

## Uses in Science of Science

- Extends [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md).
- Complements [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md) with richer author-side evidence.
- Addresses [homonym/synonym author errors](../validations/homonym_synonym_author_errors.md) in patent-reference linkage.
- Helps interpret [patent-science link confidence score](../measures/patent_science_link_confidence_score.md).

## Operationalization

- Extract full given names, initials, and multiple author names when present in patent reference strings.
- Compare them with structured publication author metadata.
- Add features for number of author matches, author order, surname commonness, and same-author publication density by year.
- Penalize high-density author-year neighborhoods unless title, journal, or page evidence resolves the match.
- Validate against known-good and precision-audit samples.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) identifies richer author evidence as a way to improve PCS matching.
- The paper notes limitations of relying mainly on first author surname and discusses possible gains from full given names, additional authors, and publication priors.
- This motif converts those improvement directions into a reusable method for noisy scholarly linkage.
- It is especially relevant for false positives involving common names or multiple similar papers by the same author.

## Caveats

- Patent reference strings often omit first names or list authors inconsistently.
- Author evidence can be corrupted by OCR, transliteration, and citation-style variation.
- Richer evidence can improve precision while reducing recall if applied too strictly.

## Links

- [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md)
- [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md)
- [homonym/synonym author errors](../validations/homonym_synonym_author_errors.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [same-author similar-paper false positive](../validations/same_author_similar_paper_false_positive.md)
- [author name disambiguation](author_name_disambiguation.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `richer_author_evidence_scoring`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: richer PCS author scoring; multiple-author patent matching; given-name patent evidence; author-year match scoring
