# Co-citation individual-visibility gate

## Summary

Co-citation individual-visibility gate is the caveat that frequent co-citation generally requires both papers to be individually visible enough to receive citations.

## Canonical Form

- Unit of analysis: cited paper, co-cited pair, specialty map, or key-paper set.
- Typical representation: citation-frequency filter, key-paper assumption, and visibility caveat for co-citation maps.
- Validation target: whether co-citation maps inherit popularity, age, and coverage filters from individual citation counts.
- Empirical signature: candidate co-citation nodes are already frequently cited papers before pairwise co-citation is evaluated.

## Uses in Science of Science

- Adds a visibility caveat to [co-citation strength](../measures/co_citation_strength.md).
- Clarifies the assumption behind [key-paper concept proxy](../representations/key_paper_concept_proxy.md).
- Helps interpret [co-cited core literature](../representations/co_cited_core_literature.md) as a visible core, not the whole intellectual substrate.
- Connects co-citation mapping to [reference popularity search](../measures/reference_popularity_search.md) and [attention inequality](../mechanisms/attention_inequality.md).

## Operationalization

- Report node-level citation counts for papers included in a co-citation map.
- Distinguish pairwise association from the prior visibility needed for a paper to enter the map.
- Check whether emerging, low-citation, or non-indexed work is excluded by construction.
- Interpret co-citation cores as downstream-community visible cores.

## Evidence and Validations

- Verified full-text evidence from Small (1973) states that frequently co-cited papers are generally frequently cited individually.
- Small links the use of co-citation maps to the assumption that frequently cited papers represent key concepts, methods, or experiments in a field.
- This makes co-citation useful for mapping key ideas while also implying a visibility gate.

## Caveats

- Low-cited but conceptually important work can be absent from co-citation maps.
- Older and methodologically general papers can dominate by visibility rather than by current specialty specificity.
- Visibility gates are affected by database coverage, citation window, and document-type inclusion.

## Links

- [co-citation strength](../measures/co_citation_strength.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [reference popularity search](../measures/reference_popularity_search.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [co-citation](../representations/co_citation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; SciSciNet: W2005207065; WoS: unknown]

## Metadata

- Concept ID: `co_citation_individual_visibility_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation visibility gate; individually cited prerequisite; co-citation popularity filter; key-paper citation visibility caveat
