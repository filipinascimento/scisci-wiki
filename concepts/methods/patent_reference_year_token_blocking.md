# Patent-reference year-token blocking

## Summary

Patent-reference year-token blocking reduces patent-to-paper matching complexity by comparing candidate papers only with patent references that share plausible publication years and informative tokens.

## Canonical Form

- Unit of analysis: patent reference string, candidate paper, publication year, non-stopword token, blocking file, or candidate comparison set.
- Typical representation: year partition, token hash table, copied reference blocks, or reduced candidate-search space.
- Method target: make large-scale unstructured patent-reference matching computationally feasible without comparing every reference to every paper.
- Empirical signature: billions or trillions of possible comparisons collapse into targeted searches within year-token blocks.

## Uses in Science of Science

- Implements the scalable blocking stage of [unstructured patent-reference matching](unstructured_patent_reference_matching.md).
- Provides a reusable entity-resolution pattern for noisy scholarly strings where all-pairs comparison is infeasible.
- Supplies the search substrate for [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md).
- Supports [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) construction and later patent-science link table releases.
- Complements [author name blocking](author_name_blocking.md) as a blocking motif for bibliographic entity resolution.

## Operationalization

- Extract all four-digit strings that could indicate publication years from each unstructured patent reference.
- Place a reference into every plausible year block when multiple candidate years appear.
- Within each year block, build additional blocks by non-stopword alphanumeric tokens from the reference.
- Search only token-specific blocks when generating candidate patent-paper matches.
- Preserve blocking rules because they define which true matches could be missed.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) says direct comparison of roughly 36 million non-patent references with 150 million MAG publications would require quadrillions of pairwise comparisons.
- The paper first partitions unstructured references by candidate article year, using four-digit strings in the range 1800-2018.
- Marx and Fuegi then hash annual subsets by non-stopword alphanumeric strings, creating token-specific reference blocks that can be searched in parallel.
- The paper argues that duplicating references across many blocks is worthwhile because disk space is cheaper than exhaustive comparison.

## Caveats

- Blocking by year can miss references with badly wrong years or no usable year unless special no-year routes are added.
- Token blocks can still be large for common words, names, or numbers.
- Blocking improves scalability but shifts some error risk from scoring to candidate generation.

## Links

- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-reference OCR lexical normalization](patent_reference_ocr_lexical_normalization.md)
- [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md)
- [author name blocking](author_name_blocking.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [research-ready table curation](research_ready_table_curation.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_year_token_blocking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: year-token patent blocking; patent NPL blocking; file-based patent reference hashing; patent-paper candidate blocking
