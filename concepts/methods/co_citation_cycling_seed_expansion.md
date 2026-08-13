# Co-citation cycling seed expansion

## Summary

Co-citation cycling seed expansion is a citation-index sampling method that starts from a known highly cited paper, follows the papers that cite it, scans their bibliographies, and promotes repeatedly cited references into a candidate co-citation core.

## Canonical Form

- Unit of analysis: seed paper, citing-paper set, bibliography, cited-reference candidate, specialty core, or citation-index snapshot.
- Typical representation: seed-to-citing-paper expansion, cited-reference frequency threshold, or iterative candidate list.
- Method target: build a bounded candidate set of key papers before computing pairwise co-citation strengths.
- Empirical signature: a small set of references repeatedly appears in the bibliographies of papers citing the seed and becomes the node set for a specialty co-citation map.

## Uses in Science of Science

- Supplies a historical candidate-generation step for [specialty co-citation mapping](specialty_co_citation_mapping.md).
- Operationalizes [key-paper concept proxy](../representations/key_paper_concept_proxy.md) by using a highly cited seed as an entry point into a specialty.
- Builds candidate nodes before [citation-index co-citation intersection](citation_index_co_citation_intersection.md) estimates pairwise edge weights.
- Should be paired with [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md) because seed choice and thresholds shape the apparent core.

## Operationalization

- Select a highly cited paper that plausibly anchors the target specialty.
- Retrieve papers that cite the seed in a defined citation-index snapshot.
- Read or parse the bibliographies of those citing papers.
- Locate cited items from those bibliographies in the citation index and count how often each is cited within the sampled citing set.
- Promote items passing a frequency threshold into the candidate core, then compute pairwise co-citation relationships among them.

## Evidence and Validations

- Verified full-text evidence from Small (1973) describes a procedure called cycling for identifying the papers in a particle-physics co-citation network.
- Small starts from a highly cited Gell-Mann paper, examines papers that cited it in the first quarter 1971 Science Citation Index, then locates the citations in those citing papers' bibliographies.
- In the example, any item cited ten or more times becomes part of the cluster of key papers to be studied.
- Small then determines co-citation relationships among all items in the resulting cluster.

## Caveats

- The expansion is anchored to the seed paper, so alternative seeds can yield different candidate cores.
- A frequency threshold filters noise but can miss peripheral, emerging, or low-citation contributions.
- Citation-index coverage and cited-reference disambiguation directly affect which items enter the candidate set.
- The procedure is best treated as a reproducible sampling rule, not as proof that the recovered core is complete.

## Links

- [specialty co-citation mapping](specialty_co_citation_mapping.md)
- [co-citation](../representations/co_citation.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [citation-index co-citation intersection](citation_index_co_citation_intersection.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md)
- [co-citation strength](../measures/co_citation_strength.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_cycling_seed_expansion`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation cycling; seed-paper citation cycling; co-citation candidate expansion; key-paper cycling procedure
