# Metric accessibility and component disclosure

## Summary

Metric accessibility and component disclosure makes evaluation metrics more reusable and contestable by publishing scores, component variables, help files, code, and where possible analysis data.

## Canonical Form

- Unit of analysis: metric, software tool, score, component variable, code repository, documentation, or public dataset.
- Typical representation: public calculator, downloadable component table, open code, help file, or reproducible metric package.
- Method target: allow users to inspect how a bibliometric score is computed and what components drive it.
- Empirical signature: users can retrieve both metric values and intermediate variables instead of only final black-box scores.

## Uses in Science of Science

- Generalizes the transparency logic behind the [iCite RCR tool](../datasets/icite_rcr_tool.md).
- Supports [transparent metric construction](transparent_metric_construction.md) and responsible evaluation.
- Links to [restricted raw/public derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md) when raw citation data cannot be redistributed.
- Helps make field-normalized metrics auditable across institutions and funders.

## Operationalization

- Publish final scores and core component variables such as citation counts, expected rates, and denominator values.
- Provide step-by-step documentation and code for reconstruction.
- Release derived tables when raw source data are proprietary.
- State which parts of the workflow depend on restricted databases.
- Version the calculator, code, component definitions, and benchmark data.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) states that RCR values for PubMed-indexed articles are freely available through iCite.
- The paper says users can download spreadsheets containing total citations, citations per year, expected citations per year, and field citation rate, with help files and full code available on GitHub.
- The authors contrast this transparency with subscription citation percentiles, proprietary journal classifications, and less transparent impact-factor calculations, while noting that raw source citation data remain partly proprietary.
- Their methods section also reports that example co-citation code, analysis CSVs, and iCite database code were available through a GitHub repository.

## Caveats

- Public derived metrics can still depend on restricted raw data.
- Accessibility does not prove validity or appropriate use.
- Code and component disclosure require maintenance as databases and algorithms change.

## Links

- [iCite RCR tool](../datasets/icite_rcr_tool.md)
- [transparent metric construction](transparent_metric_construction.md)
- [restricted raw/public derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md)
- [relative citation ratio](../measures/relative_citation_ratio.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [proprietary field-taxonomy opacity](../validations/proprietary_field_taxonomy_opacity.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative citation ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `metric_accessibility_and_component_disclosure`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: metric component disclosure; bibliometric transparency package; public metric component release; accessible metric workflow
