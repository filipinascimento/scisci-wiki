# H-index monotonicity and h-core turnover

## Summary

H-index monotonicity and h-core turnover is the caveat that an author's h-index cannot decrease over time even though the specific papers supporting it can be replaced, drop out, or return.

## Canonical Form

- Unit of analysis: author career, h-index time series, h-core publication set, citation census date, or post-publication lag.
- Typical representation: nondecreasing scalar h alongside a changing set of h-core papers.
- Validation target: whether h-index trajectories are interpreted as career dynamics rather than as fixed publication-set membership.
- Empirical signature: h increases or plateaus while papers near the h boundary are superseded by faster-cited papers.

## Uses in Science of Science

- Adds a dynamic caveat to [h-index](../measures/h_index.md) and [h-core publication set](../representations/h_core_publication_set.md).
- Helps interpret [m-quotient](../measures/m_quotient.md) when a researcher slows down, stops publishing, or receives delayed citations.
- Connects author metrics to [scientific career impact dynamics](../mechanisms/scientific_career_impact.md), delayed recognition, and citation aging.
- Warns that h-index stability can hide turnover in the papers and citation histories that support the score.

## Operationalization

- Compute h-index and h-core at repeated citation census dates.
- Record which papers enter, remain in, leave, or re-enter the h-core.
- Compare h-index growth with publication activity to identify post-publication lag and plateau behavior.
- Inspect boundary papers with exactly or just above h citations, because they are most likely to change h-core membership.
- Report the h-index scalar and the h-core transition table together when evaluating career trajectories.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) states that h grows roughly linearly during sustained productivity but that this relation breaks down when paper production slows or stops.
- Hirsch derives a publication-stop lag in a simple model: after publishing stops, h can keep increasing for a time before becoming constant because already published papers continue accumulating citations.
- The paper states that some papers never contribute to h, especially late low-citation papers written after h is already appreciable.
- Hirsch notes that papers that once contributed to h can later be superseded by faster-cited papers, while the h-index itself cannot decrease.
- The paper also allows for papers to drop out and later return to the h-core, explicitly connecting this possibility to sleeping-beauty citation trajectories.
- This makes h-index a monotone career counter with a nonmonotone underlying [h-core publication set](../representations/h_core_publication_set.md).

## Caveats

- Monotonicity is a mathematical property under cumulative citation counts; database corrections, author-disambiguation changes, or self-citation removal can still lower a measured h-index.
- H-core turnover depends on citation census dates and source coverage.
- A plateau can mean halted production, citation aging, database limits, or field-specific citation delay; it should not be interpreted without context.
- This motif describes metric dynamics, not research quality.

## Links

- [h-index](../measures/h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [m-quotient](../measures/m_quotient.md)
- [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md)
- [h-index tail insensitivity](h_index_tail_insensitivity.md)
- [h-index self-citation sensitivity](h_index_self_citation_sensitivity.md)
- [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; SciSciNet: W2128438887; WoS: unknown]

## Metadata

- Concept ID: `h_index_monotonicity_turnover`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index monotonicity; h-core turnover; h-index plateau lag; h-core dropout and reentry
