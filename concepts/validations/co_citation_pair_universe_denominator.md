# Co-citation pair-universe denominator

## Summary

Validation claims about overlap or divergence need the full possible pair denominator, not only highlighted co-citation edges.

## Canonical Form

- Unit of analysis: node set and all possible unordered document pairs.
- Typical representation: `n(n-1)/2` possible pairs with thresholded edge, overlap, and exception counts.
- Validation target: denominator transparency for co-citation comparisons.
- Empirical signature: reported overlap rates depend on the complete pair universe and threshold choices.

## Uses in Science of Science

- Strengthens [citation relation triangulation table](citation_relation_triangulation_table.md) with explicit denominators.
- Useful for comparing co-citation, direct citation, and bibliographic coupling edge sets.
- Connects edge claims to [co-citation core sampling boundary](co_citation_core_sampling_boundary.md).

## Operationalization

- Define the node set, enumerate all possible pairs, and report thresholded edge counts against that denominator.
- For each validation relation, report overlap, disagreement, and exception counts using the same pair universe.
- Document how seed expansion and thresholding affect the denominator.

## Evidence and Validations

- Verified full-text evidence from Small (1973) reports counts out of 36 possible couplings and separately counts very strong co-citation cases.
- The example demonstrates denominator-based interpretation rather than isolated edge anecdotes.

## Caveats

- The pair denominator inherits all node-entry, seed, and threshold choices.
- Large maps may require sparse representations but still need denominator reporting.

## Links

- [Citation-relation triangulation table](citation_relation_triangulation_table.md)
- [Co-citation core sampling boundary](co_citation_core_sampling_boundary.md)
- [Direct-citation co-citation overlap](direct_citation_co_citation_overlap.md)
- [Co-citation bibliographic-coupling divergence](co_citation_bibliographic_coupling_divergence.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_pair_universe_denominator`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation possible-pair denominator; co-citation edge denominator; pair-universe co-citation validation
