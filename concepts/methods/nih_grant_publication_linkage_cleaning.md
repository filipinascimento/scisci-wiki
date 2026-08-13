# NIH grant-publication linkage cleaning

## Summary

NIH benchmark and portfolio RCR analyses require cleaned grant-publication and PI identifier linkages before interpreting outcomes.

## Canonical Form

- Unit of analysis: NIH grant, publication, PI identifier, SPIRES link, RePORTER record, or benchmark corpus member.
- Typical representation: cleaned grant-publication-PI linkage table with false-positive and false-negative corrections.
- Mechanism, measurement, or validation target: benchmark membership and portfolio attribution for NIH output metrics.
- Empirical signature: RCR benchmark composition changes when grant-publication links or PI identifiers are cleaned differently.

## Uses in Science of Science

- Refines funding-output metric construction by linking it to [nih r01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md) and [grant publication linkage tables](../datasets/grant_publication_linkage_tables.md).
- Useful as a reusable check when [nih impac r01 grant panel](../datasets/nih_impac_r01_grant_panel.md) is used in science-of-science inference.
- Creates cross-links to [funding portfolio outcome suite](funding_portfolio_outcome_suite.md) so the motif is not interpreted in isolation.

## Operationalization

- Pull grant records from NIH RePORTER and publication links from NIH publication-linkage systems.
- Clean false positives and false negatives in grant-publication links.
- Join PI Person Profile IDs and document continuous-R01 filters used for benchmark construction.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) describes RePORTER grant data, SPIRES grant-publication links cleaned for false positives and false negatives, and IMPAC-II Person Profile IDs for PI linkage.
- Those joins underlie the NIH benchmark and portfolio examples used to calibrate and interpret RCR.

## Caveats

- Linkage error affects benchmark membership and PI attribution.
- Continuous-R01 filters select a stable subset and may not represent all funded research.

## Links

- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [Grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [Funding portfolio outcome suite](funding_portfolio_outcome_suite.md)
- [PubMed-indexed RCR eligibility boundary](../datasets/pubmed_indexed_rcr_eligibility_boundary.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `nih_grant_publication_linkage_cleaning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: NIH output-link cleaning; SPIRES linkage QA; IMPAC PI join
