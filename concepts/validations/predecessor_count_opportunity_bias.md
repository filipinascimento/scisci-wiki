# Predecessor-count opportunity bias

## Summary

Predecessor-count opportunity bias is the caveat that focal works with many cited predecessors create more chances for future works to co-cite those predecessors, mechanically affecting disruption-style scores.

## Canonical Form

- Unit of analysis: focal patent, predecessor citation set, future citing patent, or CD-index triad.
- Typical representation: number of backward citations as an exposure or opportunity variable.
- Validation target: separate substantive consolidation from the mechanical co-citation opportunities created by a large predecessor set.
- Empirical signature: disruption estimates are checked or controlled for focal predecessor count.

## Uses in Science of Science

- Qualifies the [disruption index](../measures/disruption_index.md).
- Adds an exposure caveat to [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Supports validation of [patent disruption face-validity cases](patent_disruption_face_validity_cases.md).
- Helps distinguish broad prior-art citation from genuine consolidation of prior streams.

## Operationalization

- Count each focal patent's backward patent citations.
- Model or stratify disruption scores by predecessor count.
- Check whether low disruption arises from greater co-citation opportunity rather than substantive continuity.
- Report controls alongside forward citation, claim count, and technology-class controls.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) includes controls for the number of patent predecessors.
- The paper treats predecessor count as a potential confound because it affects how future patents can cite both the focal patent and its predecessors.
- This validation strengthens interpretation of CD-style disruption measures.

## Caveats

- Predecessor count is also substantively meaningful because broad inventions may cite more prior art.
- Examiner-added citations can change predecessor counts independently of inventor knowledge.
- Controls may not fully capture the structure or importance of predecessor references.

## Links

- [disruption index](../measures/disruption_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [patent disruption face-validity cases](patent_disruption_face_validity_cases.md)
- [CD-index undefined cases](cd_index_undefined_cases.md)
- [patent examiner citation caveat](patent_examiner_citation_caveat.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028]

## Metadata

- Concept ID: `predecessor_count_opportunity_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: predecessor exposure bias; backward-citation opportunity bias; CD predecessor-count caveat; prior-art opportunity bias
