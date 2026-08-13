# Quoted-title fallback matching

## Summary

Quoted-title fallback matching uses quoted text spans inside patent reference strings as a rescue path for resolving cited scientific papers when author and year evidence are missing or unusable.

## Canonical Form

- Unit of analysis: patent non-patent reference string, quoted span, candidate publication title, or fuzzy title score.
- Typical representation: extracted quotation, title-token alignment, candidate paper set, and match confidence.
- Method target: recover patent-paper links that would be missed by year-author blocking.
- Empirical signature: a patent reference with weak author/year evidence still resolves to a paper because quoted words overlap a structured title strongly enough.

## Uses in Science of Science

- Refines [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md) by isolating a fallback route.
- Provides a title-centric child method for [unstructured patent-reference matching](unstructured_patent_reference_matching.md).
- Feeds evidence into [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md) and [patent-science link confidence score](../measures/patent_science_link_confidence_score.md).
- Helps audit false positives where quoted spans contain journal names, section titles, or shortened titles rather than publication titles.

## Operationalization

- Extract quoted spans from cleaned patent NPL strings.
- Compare quoted spans to title fields in the publication backbone using fuzzy token alignment.
- Require additional supporting evidence when quoted spans are short, generic, or compatible with many candidate papers.
- Penalize matches where the quote appears to be a journal name, book title, product name, or other non-paper string.
- Preserve the fallback route as provenance so users can stratify validation by match channel.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes extracting quoted text for fuzzy Microsoft Academic Graph title matching when neither year nor author routes provide adequate evidence.
- The same paper warns that quote semantics are noisy: quotes can contain journal names, shortened article titles, or other strings that should not automatically be accepted as paper titles.
- Score-stratified precision audits can test whether quoted-title fallback matches require different thresholds from author/year matches.

## Caveats

- Quoted text is not guaranteed to identify an article title.
- Short quoted spans can overmatch popular phrases or common scientific terms.
- This method depends on title coverage and title normalization in the publication backbone.

## Links

- [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md)
- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [score-stratified match precision audit](../validations/score_stratified_match_precision_audit.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `quoted_title_fallback_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: quoted span title matching; title-quote fallback; patent title rescue matching; quoted reference title evidence
