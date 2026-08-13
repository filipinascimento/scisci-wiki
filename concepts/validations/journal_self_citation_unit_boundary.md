# Journal self-citation unit boundary

## Summary

Journal self-citation unit boundary is the validation rule that self-citation exclusions in journal metrics must specify that the self unit is the journal node, not the author, article, institution, or field.

## Canonical Form

- Unit of analysis: journal citation edge, self-citation rule, metric definition, or gaming audit.
- Typical representation: within-journal citation exclusion, node-level self-loop removal, or unit-of-self note.
- Validation target: avoid ambiguity in self-citation filtering.
- Empirical signature: the metric definition states exactly which source-target equality triggers exclusion.

## Uses in Science of Science

- Sharpens [journal self-citation exclusion](journal_self_citation_exclusion.md).
- Distinguishes journal-level rules from [journal self-citation rate](../measures/journal_self_citation_rate.md).
- Connects self-loop removal to [citation metric gaming](citation_metric_gaming.md).
- Supports transparent construction of [Eigenfactor metrics](../measures/eigenfactor_metrics.md).

## Operationalization

- Define the node type used by the metric.
- Specify whether self-citations are within-journal, author self-citations, article self-links, or institutional self-links.
- Remove or flag self-loops according to that unit.
- Report whether alternate self definitions were tested.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that Eigenfactor metrics exclude self-citations to reduce manipulation incentives.
- A note in the article clarifies that these are within-journal citations rather than author self-citations.
- The same notes document related Journal Citation Reports variants that omit self-citations, making the unit boundary important for comparisons.

## Caveats

- Journal self-citation can reflect legitimate topical continuity as well as manipulation.
- The relevant self unit changes across article, author, journal, institution, and field metrics.
- Ambiguous self definitions can make metric variants incomparable.

## Links

- [journal self-citation exclusion](journal_self_citation_exclusion.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [citation metric gaming](citation_metric_gaming.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [metric family product versioning](../datasets/metric_family_product_versioning.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `journal_self_citation_unit_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: journal self unit boundary; self-citation node definition; within-journal self-loop rule
