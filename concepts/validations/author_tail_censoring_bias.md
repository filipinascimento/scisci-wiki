# Author-tail censoring bias

## Summary

Author-tail censoring bias is the limitation that author-level citation datasets restricted to highly cited scientists can support upper-tail claims but not full citation-distribution inference.

## Canonical Form

- Unit of analysis: author citation distribution, top-cited author list, citation tail, or comparison with publication-level data.
- Typical representation: censored author sample, inclusion threshold, and tail-only inference note.
- Validation target: whether an author citation dataset covers the full distribution or only the elite tail.
- Empirical signature: data availability begins with highly cited authors, leaving the lower and middle author distribution unobserved.

## Uses in Science of Science

- Adds a data-coverage caveat to [publication citation unit choice](../methods/publication_citation_unit_choice.md).
- Supports careful interpretation of [top-cited scientist status](../measures/top_cited_scientist_status.md).
- Complements [standardized author citation database](../datasets/standardized_author_citation_database.md), which later constructs a deeper author universe.
- Links to [citation elite multidimensionality caveat](citation_elite_multidimensionality_caveat.md) and [citation tail sparsity limit](citation_tail_sparsity_limit.md).

## Operationalization

- Document whether author citation data include all authors or only top-cited authors.
- Avoid fitting full-distribution forms from tail-only author samples.
- Compare author-level tail claims with publication-level distributions when possible.
- Treat missing lower-tail author records as a censoring mechanism, not as zero impact.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) contrasts publication citation counts with author citation counts.
- Redner notes that available author data were limited to most-cited authors and therefore permitted reconstruction only of the large-citation tail.
- The paper uses this as a reason to focus on publication-level citation counts for full distributional analysis.

## Caveats

- Tail-only author data can still be useful for studying elite concentration.
- Author-level and paper-level distributions answer different questions.
- Censoring interacts with author disambiguation, coauthorship credit, and field normalization.

## Links

- [publication citation unit choice](../methods/publication_citation_unit_choice.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [citation elite multidimensionality caveat](citation_elite_multidimensionality_caveat.md)
- [citation tail sparsity limit](citation_tail_sparsity_limit.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `author_tail_censoring_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: top-author tail censoring; elite-author citation censoring; author citation tail-only bias; most-cited author sample bias
