# Loose patent-reference candidate generation

## Summary

Loose patent-reference candidate generation deliberately overgenerates possible patent-to-paper matches from noisy non-patent reference strings before applying expensive scoring.

## Canonical Form

- Unit of analysis: patent non-patent reference string, candidate paper, first-author surname, publication year, title token, page number, volume number, or quoted title span.
- Typical representation: permissive candidate set, recall-oriented blocking pass, author-year-title token search, author-year-page search, or quoted-title fuzzy match.
- Method target: avoid losing true patent citations to science before detailed metadata scoring begins.
- Empirical signature: the candidate stage produces far more possible links than final released patent-paper citation edges.

## Uses in Science of Science

- Splits the recall-oriented first pass from broader [unstructured patent-reference matching](unstructured_patent_reference_matching.md).
- Uses [patent-reference year-token blocking](patent_reference_year_token_blocking.md) as the scalable search substrate.
- Feeds later [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md), which separates plausible candidates from false positives.
- Helps diagnose false negatives in [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md).
- Supports [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) construction by keeping candidate generation tolerant of missing titles, wrong years, and incomplete page fields.

## Operationalization

- Start from year and token blocks rather than all possible reference-paper comparisons.
- Generate candidates with first-author surname plus publication year plus either a long title word or second-longest title word.
- Generate additional candidates with author surname, year, and first page or volume when title evidence is weak.
- Allow limited one-year offsets for working-paper or citation-year errors.
- Add no-year and quoted-title routes for references that lack usable year or author evidence.
- Send the broad candidate set to a separate scoring stage rather than treating loose matches as final links.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes loose matching as the third stage after lexical standardization and year-token hashing.
- The paper uses author surname and year, then adds either title-word evidence or page/volume evidence to reduce billions of possible matches without imposing full structured-reference requirements.
- It allows publication years to differ by one year and includes a separate route for references missing a usable year.
- The loose searches produce more than 2 billion potential patent-citation-to-science links, which the authors explicitly treat as candidates for later scoring.

## Caveats

- Loose candidate generation can create massive false-positive sets, especially for common surnames, popular years, and generic page or volume numbers.
- Blocking assumptions define which true matches can ever be found; later scoring cannot recover candidates that were never generated.
- Overgeneration is useful only when paired with scalable scoring, validation, and threshold selection.

## Links

- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-reference year-token blocking](patent_reference_year_token_blocking.md)
- [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `loose_patent_reference_candidate_generation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: loose PCS matching; patent-paper candidate generation; recall-oriented patent reference matching; patent NPL loose search
