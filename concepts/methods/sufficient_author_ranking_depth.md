# Sufficient author ranking depth

## Summary

Sufficient author ranking depth is the design principle that author-metric databases should rank enough authors within each field to support field-specific comparison beyond tiny global elite lists.

## Canonical Form

- Unit of analysis: author database, ranked author list, field, subfield, or evaluation denominator.
- Typical representation: ranking-depth rule, top-N author table, field-specific percentile denominator, or elite-list coverage note.
- Method target: make citation rankings deep enough for within-field context rather than only global celebrity identification.
- Empirical signature: rankings include enough authors to compute useful field and subfield percentiles, not just a small cross-field elite.

## Uses in Science of Science

- Adds a construction rule to the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Supports [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md) by supplying ranking depth.
- Complements [minimum-paper author universe](minimum_paper_author_universe.md), which defines the denominator of eligible authors.
- Gives [citation elite concentration](../measures/citation_elite_concentration.md) a denominator caveat.

## Operationalization

- Define the author universe and minimum publication threshold.
- Choose a top-N depth that reaches beyond the most visible cross-field elite.
- Check whether each field and subfield has enough ranked authors for meaningful percentile placement.
- Compare depth against existing elite lists, platform profiles, and field-specific rankings.
- Report fields where the ranking is still too shallow for local comparison.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) notes the absence of a large-scale database ranking the most-cited scientists in every field to sufficient ranking depth.
- The paper contrasts their 100,000-author database with Google Scholar profiles and Clarivate's roughly 6,000-scientist highly cited list.
- Ioannidis et al. use the ranked database together with 22 fields, 176 subfields, and author counts to support field-specific percentile examples.

## Caveats

- Deeper rankings can still be misused as quality rankings.
- Field-specific depth depends on database coverage and field classification quality.
- Small or emerging subfields may need local expert review rather than global top-N depth.

## Links

- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [minimum-paper author universe](minimum_paper_author_universe.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [Google Scholar](../datasets/google_scholar.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; SciSciNet: W2968900048; WoS: unknown]

## Metadata

- Concept ID: `sufficient_author_ranking_depth`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author ranking depth; sufficient field ranking depth; deep author metric list; author percentile denominator depth
